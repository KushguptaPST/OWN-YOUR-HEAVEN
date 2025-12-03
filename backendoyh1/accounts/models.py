# models.py
from mongoengine import Document, StringField, EmailField, IntField, DateField, DateTimeField
import datetime

# ------------------- Users -------------------
class UserDocument(Document):
    username = StringField(required=True, unique=True)
    email = EmailField(required=True, unique=True)
    password = StringField(required=True)  # Store hashed password in production

# ------------------- Hotels -------------------
class Hotel(Document):
    name = StringField(required=True)
    location = StringField(required=True)
    price = IntField(required=True)
    img = StringField()  # Image URL
    desc = StringField()

# ------------------- Bookings -------------------
class Booking(Document):
    hotelId = StringField(required=True)  # Store ObjectId as string
    name = StringField(required=True)
    email = StringField(required=True)
    phone = StringField(required=True)
    checkIn = DateField(required=True)
    checkOut = DateField(required=True)
    guests = IntField(required=True)

# ------------------- Property Listing -------------------
class PropertyListing(Document):
    name = StringField(required=True)
    phone = StringField(required=True)
    email = EmailField()
    propertyType = StringField(required=True)
    city = StringField(required=True)
    message = StringField()
    facilities = StringField()
    created_at = DateTimeField(default=datetime.datetime.utcnow)



