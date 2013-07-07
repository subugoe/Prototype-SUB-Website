#!/bin/sh
rm -dr /Users/nw/dev/Prototype-SUB-website/_site
rm -dr /Users/nw/dev/Prototype-SUB-Website/css
#rm /Users/nw/dev/Prototype-SUB-Website/css/styles.css
foreman start -d /Users/nw/dev/Prototype-SUB-Website/ -f _config_foreman_dev.procfile