from flask import Blueprint, redirect
import json

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return redirect('login.html')

@main.route('/profile')
def profile():
    return json.dumps({'name' : 'Arnold', 'email' : 'arnold@example.com'})