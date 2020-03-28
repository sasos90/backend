#!/bin/bash

set -e

docker container rm db_test_service -f || true

docker-compose -f docker-compose.test.yml build --force-rm api &&
docker-compose -f docker-compose.test.yml up -d db &&

docker-compose -f docker-compose.test.yml run api npm run build api &&
docker-compose -f docker-compose.test.yml run api npm run lint api &&
docker-compose -f docker-compose.test.yml run api npm run test api

docker container rm db_test_service -f || true
