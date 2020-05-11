from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import Config
from flask_login import LoginManager

from flask_cors import CORS
'''

TODO: Check import. Find how db is defined in MegaTutorial

'''
#app = Flask(__name__, static_url_path='', static_folder='../../frontend/static/')
app = Flask(__name__)
#CORS(app)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from .api import api as api_blueprint
app.register_blueprint(api_blueprint)

# blueprint for non-auth parts of app
from .main import main as main_blueprint
app.register_blueprint(main_blueprint)

from project import models
