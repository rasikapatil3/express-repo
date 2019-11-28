#!/bin/bash
npm install

pm2 describe server > /dev/null

running = $?

if [ "${running}" -ne 0 ];
then
echo " starting"
	pm2 start server.js
else
echo "restarting"
	pm2 restart server.js
fi

