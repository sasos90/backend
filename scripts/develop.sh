#!/bin/bash

docker-compose -f docker-compose.override.yml -f docker-compose.dev.yml up -d db pgadmin
docker-compose -f docker-compose.override.yml -f docker-compose.dev.yml up --build api
