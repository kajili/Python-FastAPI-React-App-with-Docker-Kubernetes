# from fastapi import FastAPI

# app = FastAPI()


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

import requests

def get_dog_facts_data():
    response = requests.get("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=10")

    if response.ok:
        return response.json()
    else:
        return {"error": "API Request failed"}


print(get_dog_facts_data())