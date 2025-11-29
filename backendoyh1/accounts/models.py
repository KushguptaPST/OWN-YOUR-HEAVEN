from mongoengine import Document, StringField, EmailField
from django.contrib.auth.hashers import make_password, check_password

class User(Document):
    username = StringField(required=True, unique=True, max_length=50)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)  # Store hashed password

    meta = {'collection': 'users'}  # Optional: set MongoDB collection name

    # Method to set hashed password
    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    # Method to check password
    def check_password(self, raw_password):
        return check_password(raw_password, self.password)
