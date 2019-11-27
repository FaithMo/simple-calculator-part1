function multiply() {
    var product = 1;
    for (let x = 0; x < arguments.length; x++) {
      product *= arguments[x];
    }
    return product;
  }
  
  module.exports = multiply; 