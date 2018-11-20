'use strict';

var fs = require('fs');
var path = require('path');
var del = require('del');
var pify = require('pify');
var pinkiePromise = require('pinkie-promise');

var Promise = global.Promise || pinkiePromise;
var fsP = {
	symlink: pify(fs.symlink, Promise)
};

module.exports.make = function (destinationPath, destinationFilename, sourcePath, sourceFilename) {
	destinationPath = path.resolve('', destinationPath);
	var target = path.resolve(path.join(sourcePath, sourceFilename));

	var strategy = {
		del: {force: true}
	};

	if (!fs.existsSync(destinationPath)) {
		throw new Error('Destination path ' + destinationPath + ' doesn\'t exist');
	}
	
	var dest = path.join(destinationPath, destinationFilename);
	
	return Promise.resolve()
		.then(function () {
			fs.unlinkSync(dest); 
			return Promise.resolve(fs.existsSync(dest) ? del(dest, strategy.del) : null);
		})
		.then(function () {
			return fsP.symlink(target, dest);
		})
		.then(function () {
			return {target: target, path: dest};
		});
};
