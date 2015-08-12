#!/bin/bash

if [ "$#" -ne 3 ]; then 
    echo "Please input all valid arguments [name] [description] [image]"
else
    count=$(cat team.json | grep "$1" | wc -l);
    echo $count
    if [ $count -eq 0 ]; then
        echo $(cat "team.json" | sed "s/]/,{\"name\" : \"$1\", \"description\" : \"$2\", \"image\" : \"$3\"}]/") > "team.json"
    else
        echo $(cat team.json | sed "s/\"$1\", \"description\".*\"image\".*}/\"$1\", \"description\" : \"$2\", \"image\" : \"$3\"}/") > "team.json"
    fi    
fi    