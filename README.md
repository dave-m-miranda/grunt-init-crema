#grunt-init-crema

> Create a Node.js web app with [grunt-init][] in which the client and server share JavaScript modules.  Generated project contains tests for both and uses grunt and karma to watch and rerun tests on file changes.  Build runs tests, jshint, copies files to a build directory and optimizes RequireJS modules.

[grunt-init]: http://gruntjs.com/project-scaffolding
[grunt]: https://github.com/gruntjs/grunt
[grunt-cli]: https://github.com/gruntjs/grunt-cli
[karma]: https://github.com/karma-runner/karma
[Firefox]: http://www.mozilla.org/en-US/firefox

## Requirements
[grunt][]

[grunt-cli][]

[grunt-init][]

[karma][]

[Firefox][]

## Scaffold installation
Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone https://github.com/dave-m-miranda/grunt-init-crema.git ~/.grunt-init/crema
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Scaffold usage
At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init crema
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

## Project installation
```
npm install
```

### Building
```
grunt
```

### Running karma
```
karma start
```

### Run tests and jshint whenever src or test JS files change.
```
grunt watch
```

### Start server, pointed at src directory (default is port 3000)
```
node src/server/app
```

### Start server, pointed at build directory (be sure to build first)
```
node build/server/app
```





