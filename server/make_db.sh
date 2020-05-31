FLASK_APP=project flask db upgrade
FLASK_APP=project python3 -c "from project import db;from project.models import User;u = User('admin@example.com','arnold');db.session.add(u);db.session.commit();"