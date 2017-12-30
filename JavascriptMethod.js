function Person(name, age) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
    }
    else
        return new Person(name, age);
}
var person = Person("Perry", 26);
console.log(person.name);