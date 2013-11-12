#!/bin/sh
rm -dr ~/dev/Prototype-SUB-website/_site
rm -dr ~/dev/Prototype-SUB-Website/css
foreman start -d ~/dev/Prototype-SUB-Website/ -f _config_foreman_dev.procfile