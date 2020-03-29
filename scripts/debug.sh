#!/bin/bash

docker-compose -f docker-compose.override.yml -f docker-compose.debug.yml up -d db pgadmin
docker-compose -f docker-compose.override.yml -f docker-compose.debug.yml up --build api
