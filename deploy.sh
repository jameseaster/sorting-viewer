#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# add and commit build to subtree gh-pages
git add dist -f

git commit -m "Deploy to gh-pages."

git subtree push --prefix dist origin gh-pages
