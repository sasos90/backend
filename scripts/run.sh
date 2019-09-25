#!/bin/bash

docker-compose -f docker-compose.override.yml -f docker-compose.yml up --build
