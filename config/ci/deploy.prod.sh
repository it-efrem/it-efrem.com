#!/bin/bash
set -ex # e - exit on error, x - print command before execution

echo "deploy.prod"

rm -rf node_modules/
rm -rf build/

npm ci
npm run build
