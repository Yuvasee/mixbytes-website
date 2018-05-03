#!/bin/sh

read -p "Verstion: $1 Confirm version number here: " -r
echo

if [[ $REPLY = $1 ]]
then
	docker build -f docker/production/Dockerfile -t mixbytes-web:$1 .
	docker tag mixbytes-web:$1 mixbytes-web:latest
else
	echo 'Cancelled'
fi
