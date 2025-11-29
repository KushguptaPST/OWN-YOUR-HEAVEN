from mongoengine import Document, StringField, EmailField

class UserDocument(Document):
    username = StringField(required=True, unique=True)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)

    meta = {"collection": "users"}
