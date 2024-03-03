console.log(typeof "Hello world"); // will return string

let s = "hello";
let n: typeof s; // type of n is string

const typeOfValue = <T>(value:T) : string=> {
    if(typeof value === 'number'){
        return value.toFixed(2);
    }
    if (typeof value === 'string'){
        return value.toUpperCase()
    }

    return 'value is any type'
}

console.log(typeOfValue('string'))

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}
