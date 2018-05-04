#!/usr/bin/env bash
#Zipping files in /htdocs to release.zip
cd htdocs && zip -r ../release.zip . && cd ..
#Copy release.zip to live server
scp release.zip alessandroaussemsbe@ssh.alessandroaussems.be:www/release.zip
#SSH to live server browse to directory, unzip release in the current directory and remove release.zip
ssh alessandroaussemsbe@ssh.alessandroaussems.be "cd www && unzip -o release.zip && rm -rf release.zip"
#Clean-up remove release.zip from local system
rm -rf release.zip