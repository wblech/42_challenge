#!/bin/sh
yarn typeorm migration:run
yarn build
node ./dist/server.js
