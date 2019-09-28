# Instructions

### Code scaffolding

Generating the module, controllers, etc.:

`docker-compose -f docker-compose.override.yml -f docker-compose.dev.yml run api npm run nx g @nestjs/schematics:module asd -- --source-root=apps/api/src/app`
