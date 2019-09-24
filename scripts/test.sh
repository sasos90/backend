#!/bin/bash

docker image build -t backend-api:test -f apps/api/Dockerfile . &&
docker container run backend-api:test npm run lint &&
docker container run backend-api:test npm run test
