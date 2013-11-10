# {%= title || name %}

{%= description %}

## Requirements
[grunt]: https://github.com/gruntjs/grunt
[grunt-cli]: https://github.com/gruntjs/grunt-cli
[karma]: https://github.com/karma-runner/karma
[Firefox]: http://www.mozilla.org/en-US/firefox

## Requirements
[grunt][]

[grunt-cli][]

[karma][]

[Firefox][]

## Installation
```
npm install
```

## Building
```
grunt
```

## Running karma
```
karma start
```

## Run tests and jshint whenever src or test JS files change.
```
grunt watch
```

## Start server, pointed at src directory (default is port 3000)
```
node src/server/app
```

## Start server, pointed at build directory (be sure to build first)
```
node build/server/app
```
