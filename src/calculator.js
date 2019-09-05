function add(a,b){
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

multiply(3,4);

























