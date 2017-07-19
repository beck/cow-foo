# cow-foo

A toy cow to help demo code.

## Example

```
const Cow = require('cow-foo/cow');
const feedCow = require('cow-foo/feed-cow');

const cow = new Cow();
console.log(cow.name)
> 'Bessie'

feedCow(cow, () => console.log('Done!'));
> Feeding Bessie...
> Done!
```

# Tests

```
npm test
```
