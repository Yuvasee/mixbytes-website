#!/bin/sh

docker build -t website:latest -f docker/staging/Dockerfile .
docker tag website:latest 128894178443.dkr.ecr.eu-central-1.amazonaws.com/mixbytes_website:latest
ecs-cli push --region eu-central-1  --ecs-profile mixbytes  128894178443.dkr.ecr.eu-central-1.amazonaws.com/mixbytes_website:latest
ecs-cli compose --ecs-profile mixbytes --project-name mixbytes-staging --file docker/staging/staging-service.yml --cluster-config mixbytes  --verbose service up
