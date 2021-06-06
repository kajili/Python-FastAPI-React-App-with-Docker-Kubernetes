# Python-FastAPI-React-App-with-Docker-Kubernetes

My repository for an app created using Python with FastAPI, connected to a simple React UI, and containerized with Docker, deployed through Kubernetes through helm (tested on Microk8s).

## Design Plan

1. Create basic Python app that gathers data from an online API and prints that data to confirm access works.

   1. Using python `requests` library

2. Create Python `FastAPI` app that utilizes that data and has a basic GET endpoint that sends the data from the external API through a FastAPI endpoint.

   1. This endpoint will just send this data as a JSON response.

3. Create a `Dockerfile` that will containerize this `FastAPI` app into a `Docker` image that can be ran as a Docker container.

   1. Confirm that this Docker container runs successfully and that the endpoint returns the data properly.

4. Create a basic `React` app using `create-react-app` and make sure we can access the data from the endpoint that is running on the previously made `FastAPI Docker Container`.

   1. First just make sure that the data is accessible using a basic console.log() statement.

5. Once the data is accessible through the `React` app, then work on creating a component that will display the data in a list and then use that component in the App.js file.

   1. After this is done some basic styling can be added.

6. Create a `Dockerfile` that will containerize this `React` app into a `Docker` image that can be ran as a Docker container.

   1. Confirm that this Docker container runs properly, and is able to properly access our `FastAPI` Docker container and display the data correctly.

7. Once both `Docker` images have been created and are able to be used together as separate `Docker` images, create a `Helm` chart that will allow both of our `Docker` images to be deployed into a local `Kubernetes` cluster.

   1. In this case will be using `Microk8s` to deploy the `Helm` chart in `Kubernetes`, however it should be able to be deployed through `MiniKube` or any other `Kubernetes` environment.

## Running the Code

### Direct Run

#### Python FastAPI Server
- Run this command in the terminal within the python_code directory:
```
uvicorn main:app --reload
```

#### React

### Through `Docker`
- FastAPI Server:
```
docker run -d --name fastapi-server -p 5000:5000 fastapi-image
```

### Through `Helm` on Microk8s (or MiniKube)

## Difficulties with Assignment and Overcoming Them
