docker build -t <dockerhub username>/node-app .

docker run -p 49160:5000 -d <dockerhub username>/node-app

docker ps

docker images

docker kill <containter id>