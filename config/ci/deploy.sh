#!/bin/bash
set -ex # e - exit on error, x - print command before execution

git fetch --all
git reset --hard HEAD
git pull

npm ci
npm run build
