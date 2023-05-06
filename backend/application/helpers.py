from application import app
from application import user_db
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

def create_user(username, password, age, occupation):
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
    user = {
        "username": username,
        "password": hashed_password,
        "age": age,
        "occupation": occupation,
        "created_at": datetime.datetime.utcnow()
    }

    try:
        user_db.users.insert_one(user)
        return True
    except Exception as e:
        app.logger.error(f"Error while creating user: {str(e)}")
        return False

def check_user_credentials(username, password):
    user = user_db.users.find_one({"username": username})
    if user and check_password_hash(user["password"], password):
        return True
    return False


def insert_sample_data():
    sample_users = [
        {
            "username": "john",
            "password": generate_password_hash("password123", method='pbkdf2:sha256', salt_length=8),
            "age": 28,
            "occupation": "Software Developer",
            "created_at": datetime.datetime.utcnow()
        },
        {
            "username": "jane",
            "password": generate_password_hash("password123", method='pbkdf2:sha256', salt_length=8),
            "age": 32,
            "occupation": "Data Scientist",
            "created_at": datetime.datetime.utcnow()
        }
    ]

    for user in sample_users:
        user_db.users.insert_one(user)