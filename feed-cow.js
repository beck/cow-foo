module.exports = function(cow, cb) {
  console.log(`Feeding ${cow.name}...`);
  setTimeout(cb, 500);
};
