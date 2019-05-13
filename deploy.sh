#!/bin/env bash
npm version $1 && \
  git push --follow-tags

# $1: patch | minor | major