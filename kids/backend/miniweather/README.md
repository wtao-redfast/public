# Dockerizing a express.js app https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
create a Dockerfile and .dockerignore files
build image from soruce root: docker build -t <docker_user_name>/<image_name> .

## local docker deployment
list running container: $ docker ps
start container: $ docker run -p <external_port:container_port> <docker_user_name>/<image_name>
stop container: $ docker stop <container_id>

## heroku cloud deployment 
log in keroku: $ heroku login
sign into container registry: $ heroku container:login
push container to heroku: $ heroku container:push <name> -a <heroku_app_name>
launch deployment: $ heroku container:release <name> -a <heroku_app_name>