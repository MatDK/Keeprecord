from flask import jsonify, Blueprint, request
from flask_login import current_user, login_user, logout_user
from .models import User

api = Blueprint('api', __name__)

@api.route('/api/login', methods=('POST',))
def login():
    data = request.get_json()
    if data:
        user = User.authenticate(**data)
        if user:
            login_user(user)
            return jsonify({'success': True }), 200
    return jsonify({'success': False }), 200


@api.route('/api/logout')
def logout():
    logout_user()
    return jsonify({'success': True }), 200


@api.route('/api/private')
def private():
    if current_user.is_authenticated:
         return jsonify({'success': True }), 200
    else:
         return jsonify({'success': False }), 200


from .models import Note


@api.route('/api/get_notes')
def get_notes():
    if current_user.is_authenticated:
        notes = [note.to_dict() for note in  Note.query.filter_by(user_id=current_user.id).all()]
        return jsonify({'success': True, 'notes':notes}), 200
    else:
         return jsonify({'success': False }), 200

import csv
import os
from . import db
from .models import Note
from pathlib import Path

@api.route('/api/add_note', methods=('POST',))
def add_note():
    if current_user.is_authenticated:
        data = request.get_json()
        row = data['columns']
        name = data['name']
        dirpath =  'user_files/' + str(current_user.id)
        filepath =  dirpath + '/' + name + '.tsv'

        if os.path.exists(filepath):
            return jsonify({'success': False, 'what':'Note with the same name already exists' }), 200

        Path(dirpath).mkdir(parents=True, exist_ok=True)
        with open(filepath, 'w') as out:
            writer = csv.writer(out, delimiter='\t')
            writer.writerow(row)

        note = Note(name, current_user.id)
        db.session.add(note)
        db.session.commit()
        return jsonify({'success': True, 'what': 'Note created' }), 200
    else:
         return jsonify({'success': False, 'what': 'User is not athenticated' }), 200

