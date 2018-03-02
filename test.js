const crypto = require('crypto');
const { performance } = require('perf_hooks');

const hashes = crypto.getHashes();
console.log(hashes);


let start = performance.now()

let rand = crypto.randomBytes(32);



crypto.pbkdf2('secret', rand, 10000, 512, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey);  // '3745e48...aa39b34'
  let end = performance.now()
  console.log((end - start) + 'ms')
});
