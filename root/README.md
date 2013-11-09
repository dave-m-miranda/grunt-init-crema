# Node Template
Template to share JavaScript code between client (browser) and Node.js server.

## Requirements

*grunt*

To install globally:

    npm install grunt -g

*grunt-cli*

To install globally:

    npm install grunt-cli -g

*karma*

To install globally:

    npm install karma -g

*Firefox* (default browser that this project configured for karma)

## Installation
    npm install

## Building
    grunt

## Running karma
    karma start

## Run tests and jshint whenever src or test JS files change.
    grunt watch

## Start server, pointed at src directory (default is port 3000)
    node src/server/app

## Start server, pointed at build directory (be sure to build first)
    node build/server/app
