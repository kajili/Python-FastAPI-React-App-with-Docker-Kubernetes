from fastapi import FastAPI

from app.functions import get_dog_facts_data

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Go to the /dogs endpoint for dog facts!"}


@app.get("/dogs")
async def dogs_endpoint():
    return get_dog_facts_data()