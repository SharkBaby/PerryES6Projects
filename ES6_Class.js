class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    // Perry: function should be retained in class.
    toString(){
        var xAndy = '(' + this.x + this.y+')';
        console.log('toString:' + xAndy);
        return xAndy;
    }
}
// Could not declare the function in class like this.
// var toFloat = function(){
//     console.log('toFloat - console.log');
//     return 'toFloat';
// }
Point.protoptype = {
    toInt(){
            console.log('toInt - console.log');
            return 'toInt';
            },
    // toFloat
}
Object.assign(Point.prototype,{
    toValue(){return 'this is toValue';},
});
console.log(Object.keys(Point.prototype));
// Validate hasOwnroperty
console.log(Point.hasOwnProperty('x'));
console.log(Point.hasOwnProperty('y'));
console.log(Point.hasOwnProperty('toString'));
console.log('// --------------------------');
// --------------------------
console.warn(Point == Point.prototype.constructor);
const constVal1 = new Point(1,2);
console.warn(constVal1 == Point.prototype.constructor);
console.log(typeof constVal1);
console.log(constVal1.toString());
console.log(constVal1.toValue());
// console.log(constVal1.toFloat());
console.log('// --------------------------');
// --------------------------
let constVal2 = new Point(3,4);
console.warn(constVal2 == Point.prototype.constructor);
console.log(typeof constVal2);
console.log(constVal2.toString());