#!/usr/bin/env sh

echo "Copying the node_modules ..."
cp -r /usr/src/cache/node_modules/. /app/node_modules/
#rsync -arv /app/node_modules /usr/src/cache/node_modules
echo "Done copying node_modules! They're also located at the host machine."

exec "$@"
