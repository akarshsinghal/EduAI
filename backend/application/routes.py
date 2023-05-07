from flask import request, jsonify
from application import app, user_db, prompt_db
from application.helpers import create_user, check_user_credentials , create_prompt_stage_one


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

@app.route("/dashboard", methods=["GET","POST"])
def dash():
    data = request.get_json()
    username = data.get("username")
    topic = data.get("topic")
    difficulty = data.get("difficulty")

    if not all([username, topic, difficulty]):
        return jsonify({"message": "username, topic and difficulty are required"}), 400

    response = create_prompt_stage_one(username, topic, difficulty)

    if response != None:
        return response

    return jsonify({"message": "Was unable to generate the questions"}), 400

