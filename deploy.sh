#!/usr/bin/env bash
#Zipping files in /htdocs to release.zip
cd htdocs && zip -r ../release.zip . && cd ..
#Copy release.zip to live server
scp -P 7685 release.zip u38481p33797@web0092.zxcs.be:domains/alessandroaussems.be/public_html/release.zip
#SSH to live server browse to directory, unzip release in the current directory and remove release.zip
ssh u38481p33797@web0092.zxcs.be -p 7685 "cd domains/alessandroaussems.be/public_html/ && unzip -o release.zip && rm -rf release.zip"
#Clean-up remove release.zip from local system
rm -rf release.zip