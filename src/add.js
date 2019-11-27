function add() {
  var sum = 0;
  for (let x = 0; x < arguments.length; x++) {
    sum += arguments[x];
  }
  return sum;
}

module.exports = add;
