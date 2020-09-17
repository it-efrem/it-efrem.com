#!/bin/bash
set -ex # e - exit on error, x - print command before execution

echo "git_increment_tag"

#CURRENT_BRANCH=$(git branch --show-current)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "$CURRENT_BRANCH: $CURRENT_BRANCH"

if [[ "$CURRENT_BRANCH" == "master" ]]; then
  CURRENT_TAG=$(git describe --abbrev=0 --tags)
  VERSION_BITS="${CURRENT_TAG//./ }"

  VNUM1=${VERSION_BITS[0]}
  VNUM2=${VERSION_BITS[1]}
  VNUM3=${VERSION_BITS[2]}
  VNUM3=$((VNUM3 + 1))

  LAST_TAG_COMMIT_HASH=$(git rev-list -n 1 $CURRENT_TAG)
  LAST_COMMIT_HASH=$(git rev-parse HEAD)

  if [[ "$LAST_TAG_COMMIT_HASH" == "$LAST_COMMIT_HASH" ]]; then
    echo "Already a tag on this commit"
  else
    NEW_TAG="$VNUM1.$VNUM2.$VNUM3"
    git tag $NEW_TAG
    echo "Tagged with $NEW_TAG"
    git push --tags
  fi
else
  echo "Branch isn't master"
  echo "$CURRENT_BRANCH"
fi

echo "git_increment_tag - done"