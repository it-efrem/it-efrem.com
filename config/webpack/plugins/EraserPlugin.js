var validateOptions = require('schema-utils');
var exec = require('child_process').exec;
var os = require('os');

const schema = {
    type: 'object',
    properties: {
        relativePath: {
            type: 'string'
        }
    }
};

// ToDo: accept array paths
class EraserPlugin {
    constructor(options = {}) {
        if (validateOptions(schema, options, 'EraserPlugin')) {
            if (os.platform() === 'win32') {
                this.options = {
                    ...this.options,
                    relativePath: options.relativePath.split('/').join('\\')
                }
            } else {
                this.options = options;
            }

            this.absolutePath = process.cwd() + this.options.relativePath;
        }
    }

    apply(compiler) {
        compiler.hooks.run.tap('EraserPlugin', () => {
            console.log('\r\n')
            console.log('EraserPlugin')
            console.log('relativePath: ', this.options.relativePath)
            console.log('absolutePath: ', this.absolutePath)

            const callback = (error) => {
                if (!error) {
                    console.log(`Result: cleared!`);
                } else {
                    console.log('Result: does not exist')
                }
                console.log('\r\n')
            }

            if (os.platform() === 'win32') {
                exec(`RMDIR /S /Q ${this.absolutePath}`, callback);
            } else {
                exec(`rm -rf ${this.absolutePath}`, callback);
            }
        });
    }
}

module.exports = EraserPlugin;