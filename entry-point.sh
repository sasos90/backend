#!/usr/bin/env sh

echo "Copying the node_modules ..."
#cp -r /usr/src/cache/node_modules/. /app/node_modules/
rsync -arh --delete-after /usr/src/cache/node_modules/ /app/node_modules/
echo "Done copying node_modules! They're also located at the host machine."

exec "$@"
