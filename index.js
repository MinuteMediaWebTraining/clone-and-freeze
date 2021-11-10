const _ = require('lodash');

const obj = {
    inner: {
        name: 'Yuval'
    }
}

const copy = _.cloneDeep(obj);

copy.inner.name = 'Oren';

console.log(obj.inner.name, copy.inner.name)