type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric){
    if(typeof a ==='number' && typeof b ==='number'){
        return a + b;
    }
    else if(typeof a ==='string' && typeof b ==='string'){
        return a.concat(b);
    }
    else{
        return 0;
    }

    throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
}

const ad = add("1", "2");

const n = add(1, 2);
console.log(ad)
console.log("n ="+n)
const n1 = add(1, "2");
console.log("n1 = " + n1)



