#!/bin/bash
# Convert .DDS (directx draw surface) -> PNG using Imagemagick.

rm -rf public/game_assets/
mkdir public/game_assets/

# convert unit images
mkdir public/game_assets/units/
files=$(ls game_assets/units/*.DDS)
for file in $files
do
    echo "Converting $file"
    # we need to swap the color channels from RGB -> BGR in order to make the assets display correctly
    convert "$file"  -separate -swap 0,2 -combine  "public/game_assets/units/$(basename "$file" .DDS).png"
done

# convert building images
mkdir public/game_assets/buildings/
files=$(ls game_assets/buildings/*.DDS)
for file in $files
do
    echo "Converting $file"
    # we need to swap the color channels from RGB -> BGR in order to make the assets display correctly
    convert "$file"  -separate -swap 0,2 -combine  "public/game_assets/buildings/$(basename "$file" .DDS).png"
done

# convert tech images
mkdir public/game_assets/techs/
files=$(ls game_assets/techs/*.DDS)
for file in $files
do
    echo "Converting $file"
    # we need to swap the color channels from RGB -> BGR in order to make the assets display correctly
    convert "$file"  -separate -swap 0,2 -combine  "public/game_assets/techs/$(basename "$file" .DDS).png"
done

cp -R game_assets/civs/ public/game_assets/civs/
cp -R game_assets/ages/ public/game_assets/ages/
cp -R game_assets/resources/ public/game_assets/resources/

echo "All done."