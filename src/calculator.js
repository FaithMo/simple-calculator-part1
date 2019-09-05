function add(){
    var sum=0;
        for(let x=0; x<arguments.length; x++){
        sum +=arguments[x];
    }
    return sum;
}

function multiply(){
        var product=1;
        for(let x=0; x<arguments.length; x++){
            product *= arguments[x];
        }
        return product;
    };

console.log(multiply(3,4));
console.log(add(3,4));






















