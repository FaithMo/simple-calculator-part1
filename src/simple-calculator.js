function add() {
  let sum = 0;
  for (let x = 0; x < arguments.length; x++) {
    sum += arguments[x];
  }
  return sum;
}
function multiply() {
  let product = 1;
  for (let x = 0; x < arguments.length; x++) {
    product *= arguments[x];
  }
  return product;
}
module.exports = {
  add,
  multiply,
};
