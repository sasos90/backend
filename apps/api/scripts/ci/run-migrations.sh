#!/bin/bash

pwd
ls -la
rm -rf dist/*
npm run api:migration:run
