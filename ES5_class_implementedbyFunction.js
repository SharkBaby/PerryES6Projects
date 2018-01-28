// How to declare use closere?_One
function Person(name){
    var obj = new Object();
    // this.name = name;
    obj.name = name;
    // closere
    obj.toStringInternal = function(){
        // Here you can use this.name or obj.name is equal, as this will assign to current object ->obj
        // var xAndy = '(' +obj.name +')';
        var xAndy = '(' +this.name +')';
        console.log('toStringInternal:' + xAndy);
        return xAndy;
    }
    // 2 - get/set
    obj.getName = function(){    
        return this.name;    
    }   
    obj.setName = function(newName){    
        this.name = newName;    
    }     
    return obj;
}
Person.showMsg = function(showmsg){
    console.log('showMsg:' + showmsg);
}
// 3 - static
Person.prototype.toString = function(){
    var xAndy = '(' + this.name +')';
    console.log('toString:' + xAndy);
    return xAndy;
}
// How to declare use closere?_Two
var Person2 = {
    name: '',
    toStringInternal:function(){
        var xAndy = '(' + this.name +')';
        console.log('toStringInternal:' + xAndy);
        return xAndy;
    }
}
console.warn(Person == Person.prototype.constructor);
var person = new Person('ES5_class');
console.warn(person == Person.prototype.constructor);
console.log(person.name);
// 3 -Check static
console.log(Person.showMsg());
console.log(person.toString());
// closere
console.log(person.toStringInternal());
console.log('// --------------------------');
// --------------------------
// How to declare use closere?_Two
Person2.name = 'ES5_class';
console.log(Person2.toStringInternal());
// Extends Class
var jackObj = function(){};
jackObj.prototype = new Person();
//      Add private method
jackObj.prototype.say = function(){
    console.log('Hello' + this.name);
}
var jack = new jackObj();
jack.setName('jack');
console.log(jack.getName());
jack.say();
