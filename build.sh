#!/bin/bash
#
for d in archives/*/ ; do
  if [ -d "$d"  ]; then
    rm -rf "$d/+libs" 2> /dev/null
    mkdir "$d/+libs"
    cp ./public/assets/scratch4j-windows-amd64.jar "$d/+libs/"
  fi
done
