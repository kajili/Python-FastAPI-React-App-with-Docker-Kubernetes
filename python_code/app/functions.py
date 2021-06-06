import requests


def get_dog_facts_data():
    response = requests.get(
        "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=10")

    if response.ok:
        return response.json()
    else:
        return {"error": "API Request failed"}
