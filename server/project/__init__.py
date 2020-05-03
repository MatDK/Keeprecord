from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .config import Config
from flask_cors import CORS

def create_app():

    #app = Flask(__name__, static_url_path='', static_folder='../../frontend/static/')
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(Config)

    db = SQLAlchemy(app)
    migrate = Migrate(app, db)

    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app


app = create_app()