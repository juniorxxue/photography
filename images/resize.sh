#!/bin/bash

mkdir thumbs
for file in fulls/*; do
    filename=$(basename "$file")
    magick "$file" -resize 20% thumbs/"$filename"
done
