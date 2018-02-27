#!/bin/bash

rm *.zip
zip -r package.zip package.json index.js src node_modules

bx wsk action update image-analysis2 --param-file params.json --web true --kind nodejs:8 package.zip 
