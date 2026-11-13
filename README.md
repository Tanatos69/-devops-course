# DevOps Course
Notes and code from the Full Stack AI DevOps course.

## docker/app1-hello
Hello World in 3 languages, each with a Dockerfile:
- `python/` Flask, run on port 8081
- `node/` Node.js, run on port 8082
- `springboot/hello-spring/hello/` Spring Boot, run on port 8083

Build and run (inside a language folder):
    docker build -t hello-python:v1 .
    docker run -d --name hello-python -p 8081:8080 hello-python:v1
