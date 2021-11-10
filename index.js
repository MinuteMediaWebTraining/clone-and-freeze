const cloneFreeze = require('./clone-and-freeze');

const original = {
    name: 'Yuval',
    inner: {
        array: [1,2,3]
    }
}

const copy = cloneFreeze.cloneAndFreeze(original);

original.name = '[original]';
copy.name = '[copy]';

console.log(original.name, copy.name)