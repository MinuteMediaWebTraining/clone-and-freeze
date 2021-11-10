const _ = require('lodash');

function cloneAndFreeze(obj) {
    const copy = _.cloneDeep(obj);
    const frozen = Object.freeze(copy);
    return frozen;
}

module.exports.cloneAndFreeze = cloneAndFreeze;
