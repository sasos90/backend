#!/bin/bash

docker-compose exec api sh -c "npm run build:api && npm run migration:generate -- -n $1 -d apps/api/src/app/migrations --config apps/api/ormconfig.js"
