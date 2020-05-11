from flask import jsonify, Blueprint, request
from flask_login import current_user, login_user, logout_user
from .models import User
import pdb
api = Blueprint('api', __name__)

@api.route('/api/login', methods=('POST',))
def login():
    print(request.data)
    data = request.get_json()
    print('data',data)
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

