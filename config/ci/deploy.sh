#!/bin/bash
set -ex # e - exit on error, x - print command before execution

docker-compose down -v --remove-orphans --rmi local
docker-compose up --build --force-recreate --no-deps -d -V --remove-orphans
sh ./git_increment_tag.sh