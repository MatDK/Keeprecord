from flask import Blueprint, redirect
from flask import jsonify
from flask_login import current_user

main = Blueprint('main', __name__)


@main.route('/')
def index():
    return redirect('login.html')


@main.route('/profile')
def profile():
    return jsonify({'name' : 'Arnold', 'email' : 'arnold@example.com'})


