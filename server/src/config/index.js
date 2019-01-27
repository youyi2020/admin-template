const local = require('./env/local.env.js');
const dev = require('./env/dev.env.js');
const test = require('./env/test.env.js');
const prod = require('./env/prod.env.js');
const beta = require('./env/beta.env.js');

function environment() {
    switch (process.env.NODE_ENV) {
        case 'local':
            return local;
        case 'dev':
            return dev;
        case 'test':
            return test;
        case 'beta':
            return beta;
        case 'prod':
            return prod;
    }
}

module.exports = environment();