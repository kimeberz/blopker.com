#!/usr/bin/env bash

yeoman build
scp -r dist/* gouda@blopker.com:public/production/blopker
