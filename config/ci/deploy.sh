#!/bin/bash
set -ex # e - exit on error, x - print command before execution

echo ""
echo " ======= Pull project ======= "
echo ""

git reset --hard HEAD
git checkout master
git pull

echo ""
echo " ====== Build project ======= "
echo ""

docker-compose down -v --remove-orphans --rmi local
docker-compose up --build --force-recreate --no-deps -d -V --remove-orphans

echo ""
echo " =========== Done =========== "
echo ""