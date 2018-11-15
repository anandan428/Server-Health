var _ = require('lodash'),
    chalk = require('chalk'),
    glob = require('glob'),
    fs = require('fs'),
    path = require('path');


var getGlobbedPaths = (globPatterns, excludes) => {

    var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');
    var output = [];

    if (Array.isArray(globPatterns)) {
        globPatterns.forEach((globPattern) => {
            output = _.union(output, getGlobbedPaths(globPattern, excludes));
        });
    } else if (typeof globPatterns === 'string') {
        if (urlRegex.test(globPatterns)) {
            output.push(globPatterns);
        } else {
            var files = glob.sync(globPatterns);
            // console.log(files);
            if (excludes) {
                files = files.map((file) => {
                    if (Array.isArray(excludes)) {
                        for (var i of excludes) {
                            if (excludes.hasOwnProperty(i)) {
                                file = file.replace(excludes[i], '');
                            }
                        }
                    } else {
                        file = file.replace(excludes, '');
                    }
                    return file;
                });
            }
            output = _.union(output, files);
        }
    }

    return output;
}

var validateEnvironmentVariable = () => {
    var environmentFiles = glob.sync('./config/env/' + process.env.NODE_ENV + '.js');
    if (!environmentFiles.length) {
        if (process.env.NODE_ENV) {
            console.log(chalk.red('+ Error: No config file found for "' + process.env.NODE_ENV + '", fallback to development instead'));
        } else {
            console.error(chalk.red('+Error: Env is not defined, fallback to development instead'));
        }
        process.env.NODE_ENV = 'development';
    }
}

var initGlobalConfigFiles = (config, assets) => {
    config.files = {
        server: {}
    }
    config.files.server.models = getGlobbedPaths(assets.server.models);
    config.files.server.routes = getGlobbedPaths(assets.server.routes);
}

var initGloablConfig = () => {
    validateEnvironmentVariable();
    var defaultAssets = require(path.join(process.cwd(), 'config/assets/default'));
    var environmentAssets = require(path.join(process.cwd(), 'config/assets', process.env.NODE_ENV)) || {};
    var assets = _.merge(defaultAssets, environmentAssets);
    var defaultConfig = require(path.join(process.cwd(), 'config/env/default'));
    var environmentConfig = require(path.join(process.cwd(), 'config/env/', process.env.NODE_ENV)) || {};
    var config = _.merge(defaultConfig, environmentConfig);
    initGlobalConfigFiles(config, assets);
    var pkg = require(path.resolve('./package.json'));
    config.app = pkg;
    config = _.merge(config, (fs.existsSync(path.join(process.cwd(), 'config/env/local-' + process.env.NODE_ENV + '.js')) && require(path.join(process.cwd(), 'config/env/local-' + process.env.NODE_ENV + '.js'))) || {});
    return config;
}

module.exports = initGloablConfig();