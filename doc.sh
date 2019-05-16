#!/bin/env bash

yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "更新文档"
git push
git checkout -