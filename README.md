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

7. Once both `Docker` images have been created and are able to be used together as separate `Docker` images, create a `deployment.yaml` file that will allow both of our `Docker` images to be deployed into a local `Kubernetes` cluster.

   1. In this case will be using `Microk8s` to deploy the `deployment.yaml` chart in `Kubernetes`, however it should be able to be deployed through `MiniKube` or any other `Kubernetes` environment.

## Running the Code

### Direct Run

#### Python FastAPI Server

- Go to `python_code` directory

```
cd python_code
```

- Create a Python virtual environment and activate it. Then install requirements from `python_code/requirements.txt`.

```
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

- Run this command in the terminal within the `python_code` directory:

```
uvicorn app.main:app --host 0.0.0.0 --port 5000 --reload
```

- **Usage**:
  - Go to this URL to see the available endpoints!

```
http://localhost:5000/docs
```

#### React App

- Go to `react_code` directory

```
cd react_code
```

- Have `Node.js` and `npm` installed and then run `npm install` within `react_code` directory

```
npm install
```

- Start the React server using `npm start`

```
npm start
```

- **Usage**:
  - Go to this URL to see the React App running!

```
http://localhost:3000
```

### Through `Docker`

- First set up the Docker Network so the containers can speak with each other:

```
docker network create fastapi_react_network
```

- Then run the below Docker container commands using that network. The Docker images will be pulled automatically from Docker Hub.

#### Python FastAPI Server:

```
docker run \
-d \
--rm \
--name fastapi-dog-facts-server \
-p 5000:5000 \
--network fastapi_react_network \
kevinajili/fastapi-dog-facts
```

- **Usage**:
  - Go to this URL to see the available endpoints!

```
http://localhost:5000/docs
```

#### React App

```
docker run \
-itd \
--rm \
--name react-app-dog-facts \
-v /app/node_modules \
-p 3000:3000 \
-e CHOKIDAR_USEPOLLING=true \
--network fastapi_react_network \
kevinajili/react-app-dog-facts
```

- **Usage**:
  - Go to this URL to see the React App running!

```
http://localhost:3000
```

- Teardown both Docker containers:

```
docker kill fastapi-dog-facts-server react-app-dog-facts
```

### Through `kubectl` on Microk8s (or MiniKube)

- Run this command in the root folder to deploy the deployments and services:

```
kubectl apply -f deployment.yaml
```

- Access the services by loading the IP addresses after the services are deployed from the above command.

```
kubectl get all
```

- Launch `FastAPI Server` from Kubernetes
  - Find and copy the `CLUSTER-IP` Address of the `fastapi-service` and go to that URL + port 5000

```
http://<CLUSTER-IP_of_service/fastapi-service>:5000/docs
```

- Launch `React UI` from Kubernetes
  - Find and copy the `CLUSTER-IP` Address of the `ui` service and go to that URL + port 3000

```
http://<CLUSTER-IP_of_service/ui>:3000
```

- Teardown the cluster using this command:

```
kubectl delete -f deployment.yaml
```

## Difficulties with Assignment and Overcoming Them

- One of the main difficulities of this assignment is actually getting the Docker containers to communicate with each other because the React docker container is trying to access `localhost:5000/dogs` to get information from the FastAPI server, but they are on different networks within the Docker Containers.

  - I will solve this by using a Docker Network.
  - The Docker image was created using a different proxy to connect to the FastAPI docker container's DNS name internally, and for local deployment the proxy in package.json was kept as `localhost` so that it can be run directly.

- Another difficulty is getting the two Docker containers to run together within Kubernetes

  - I will be working through solving this using research and testing to orchestrate the containers into Kubernetes.
  - I had to create a separate Docker image for the kubernetes deployment of the react UI, because it needed to point to the internal network `fastapi-service`. But this worked as a solution.
    - This was similar to what I did to get the Docker containers to connect to each other.

- Overall I had a lot of fun working on this project, and I feel a huge sense of accomplishment getting each part of it working, and even deployed through Docker directly, and Kubernetes as well.

change
