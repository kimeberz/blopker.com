#/bin/bash

PROJECT="kimboux"
DIR="dev"

if [[ $1 = "pro" ]]; then
  DIR="production"
fi

yeoman build
rsync -avc dist/* kim@blopker.com:public/$DIR/
