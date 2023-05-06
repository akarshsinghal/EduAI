from flask import request, jsonify
from application import app
from application import user_db
from application.helpers import create_user, check_user_credentials , insert_sample_data

@app.route("/")
def index():
    return "Hello world"

@app.route("/test_db")
def test_db():
    insert_sample_data()
    return "hello, everything worked"

@app.route("/register", methods=["GET","POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    age = data.get("age")
    occupation = data.get("occupation")

    if not all([username, password, age, occupation]):
        return jsonify({"message": "All fields are required"}), 400

    if user_db.users.find_one({"username": username}):
        return jsonify({"message": "Username already exists"}), 400

    if create_user(username, password, age, occupation):
        return jsonify({"message": "User registered successfully"}), 201

    return jsonify({"message": "Error occurred while registering user"}), 500

@app.route("/login", methods=["GET","POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not all([username, password]):
        return jsonify({"message": "Both username and password are required"}), 400

    if check_user_credentials(username, password):
        # In a real-world application, you would return a JWT token or a session ID here
        return jsonify({"message": "Logged in successfully"}), 200

    return jsonify({"message": "Invalid username or password"}), 401