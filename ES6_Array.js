class myArray extends Array{
    constructor(...args){
        super(...args);
    }
}
var arr = new myArray();
arr[0] = 12;
console.log(arr.length);
console.log(arr[0]);