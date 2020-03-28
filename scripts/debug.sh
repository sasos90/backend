#!/bin/bash

docker-compose -f docker-compose.override.yml -f docker-compose.debug.yml up --build db api
