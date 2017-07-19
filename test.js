'use strict';
const Cow = require('./cow');
const feedCow = require('./feed-cow');

const check = '\x1b[32m✔︎\x1b[0m';

const cow = new Cow();

// test cow
console.assert(cow.name === 'Bessie');
console.log(`${check} \`new Cow()\` is named Bessie`);

console.assert(cow.name === String(cow));
console.log(`${check} \`String(cow)\` is the cow's name`);

// test feedCow
function feedCowResult() {
  const _log = console.log;
  let out;
  console.log = function (text) {
    out = text;
  };
  return new Promise(resolve => {
    feedCow(cow, () => {
      console.log = _log;
      resolve(out);
    });
  });
}

feedCowResult()
  .then(out => {
    const expected = 'Feeding Bessie...';
    console.assert(out === expected, `${out} != ${expected}`);
    console.log(`${check} \`feedCow(cow, cb)\` prints '${expected}'`);
  })
  .catch(console.error);
