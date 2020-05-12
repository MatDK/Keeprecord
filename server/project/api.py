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

