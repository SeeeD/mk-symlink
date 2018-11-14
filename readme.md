# make-symlinks
> Create symbolic link (symlink)


## Install

```console
$ npm install mk-symlink
```

## Usage

```js
const mkSymlinks = require('mk-symlinks');

const sourcePath = '/dev/configurations';
const sourceFile = 'development.json';
const targetPath = '/dev/project/api';
const targetFile = 'config.json';

mkSymlinks.make(targetPath, targetFile, sourcePath, sourceFile);
```


## API

### mkSymlinks.make(destinationPath, destinationFilename, sourcePath, sourceFilename)

Creates a symbolic link by passing the path and filename of the source and target.

## License

MIT © [Stefan Riedinger](https://github.com/SeeeD)
