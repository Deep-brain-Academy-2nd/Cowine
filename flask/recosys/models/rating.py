from email.policy import default
from recosys import db
from sqlalchemy import func

class rating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.String(100), unique=True, nullable=False)
    wineCode = db.Column(db.String(20), nullable=False)
    rating = db.Column(db.Integer)
