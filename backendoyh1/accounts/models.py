# backendoyh1/models.py
from mongoengine import Document, StringField, EmailField, IntField, DateField

# ------------------- Users -------------------
class UserDocument(Document):
    username = StringField(required=True, unique=True)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)  # Store hashed password in production

    meta = {
        "collection": "users"
    }

# ------------------- Hotels -------------------
class Hotel(Document):
    name = StringField(required=True)
    location = StringField(required=True)
    price = IntField(required=True)
    img = StringField()  # Image URL
    desc = StringField()

    meta = {
        "collection": "hotels"
    }

# ------------------- Bookings -------------------
class Booking(Document):
    hotelId = StringField(required=True)  # Store ObjectId as string
    name = StringField(required=True)
    email = StringField(required=True)
    phone = StringField(required=True)
    checkIn = DateField(required=True)
    checkOut = DateField(required=True)
    guests = IntField(required=True)

    meta = {
        "collection": "bookings"
    }

