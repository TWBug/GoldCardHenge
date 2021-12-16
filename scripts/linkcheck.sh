#!/bin/bash
#
# Check content for any dead links, requires linkchecker.

cd content

if [ `pwd | awk -F '/' {'print $NF'}` != 'content' ]; then echo "Must be run from content dir"; exit 1; fi;

grep -R -Eo '(http|https)://.+\)' * | awk -F \) '{print $1}' | awk -F 'md:' '{print $2}' | sort | uniq > .links-to-check

tail +2 .links-to-check | linkchecker --stdin  --check-extern -r0 -v
