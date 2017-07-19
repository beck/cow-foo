function Cow() {
  this.name = 'Bessie';
}

Cow.prototype.toString = function() {
  return this.name
}

module.exports = Cow;
