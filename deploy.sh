#!/bin/env bash

# $1: patch | minor | major
npm version $1 && \
  git push --follow-tags  

