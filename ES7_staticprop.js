class myClass{
    myProp = 42;
    constructor(){
        console.log(this.myProp);
    }
}
class staticmyClass{ 
    static myProp = 42;
    constructor(){
        console.log(this.myProp);
    }
}
var myClassObj = new myClass();