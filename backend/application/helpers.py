from application import app, user_db, co, prompt_db
import datetime
from flask import jsonify
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


def create_prompt_stage_one(username, topic, difficulty):
    user = user_db.users.find_one({"username": username})
    response = co.generate(
        model='command-light',
        prompt='topic: {}\nage: {}\noccupation: {}\ndifficulty: {}\n\nGenerate 5 questions starting with "Do you want to learn about" that ask the users[i] what sub-topic they want to learn about from the given topic which is {}, while taking into consideration their age which is {}, occupation which is {}, and difficulty of the questions which is {}:'.format(
            topic, user['age'], user['occupation'], difficulty, topic, user['age'], user['occupation'], difficulty,),
        max_tokens=422,
        temperature=0.9,
        k=0,
        stop_sequences=[],
        return_likelihoods='NONE')

    result = (response.generations[0].text).split('?')
    json_result = []
    for i in range(0, 5):
        json_result.append({"questionText": result[i][2:] + '?'})

    prompt = {
        "username": username,
        "age": user['age'],
        "occupation": user['occupation'],
        "topic": topic,
        "difficulty": difficulty,
        "questions": json_result,
        "answers": None
    }

    try:
        prompt_db.prompts.insert_one(prompt)
        return json_result
    except Exception as e:
        app.logger.error(f"Error while creating prompt: {str(e)}")
        return None



def add_answers(username, answers):
    prompts = prompt_db.prompts.find({"username" : username})
    for prompt in prompts:
        if prompt["answers"] == None:
            prompt["answers"]= answers
            return prompt
        else:
            continue
    return None

#def generate_final(prompt):