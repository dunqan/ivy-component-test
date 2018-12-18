#!/bin/bash

node_modules/.bin/ngc
rollup -c rollup.config.js

cp build/src/index.d.ts dist/
mkdir dist/app
cp build/src/app/*.d.ts dist/app


mkdir dist/app/drugi
mkdir dist/app/trzeci
cp build/src/app/drugi/*.d.ts dist/app/drugi
cp build/src/app/trzeci/*.d.ts dist/app/trzeci

echo '{ "version": "0.0.3", "name": "ivy-app", "main": "ivy-app.js"}' > dist/package.json
