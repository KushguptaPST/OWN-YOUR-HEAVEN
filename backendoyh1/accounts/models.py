from mongoengine import Document, StringField, EmailField, IntField

class UserDocument(Document):
    username = StringField(required=True, unique=True)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)

    meta = {"collection": "users"}



class Hotel(Document):
    name = StringField(required=True)
    location = StringField(required=True)
    price = IntField(required=True)
    img = StringField()  # image URL
    desc = StringField()