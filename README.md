[![pages-build-deployment](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/codeql-analysis.yml)
[![Build and Deploy](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/andythebreaker/andythebreaker.github.io/actions/workflows/main.yml)

# start info.

## windows

|ver|node|
|--|--|
|10|14.16.0|

`"start": "SET PORT=18877 && react-scripts start",`

`npm i`

`npm start`

## linux

|ver|node|
|--|--|
|10|17.9.0|

`"start": "PORT=18877 react-scripts start",`

`npm install` : ok

`npm start` : ok


# Q/A

## B/N

### solved

- port
> use `./killport.sh`

## F/N

- 應該是ssl的問題

~~### solved~~

~~[chrome-navigator-mediadevices-getusermedia-is-not-a-function](https://stackoverflow.com/questions/37315361/chrome-navigator-mediadevices-getusermedia-is-not-a-function)~~