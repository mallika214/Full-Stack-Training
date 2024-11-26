class Person1{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    hello(){
        console.log('Hello my name is ${this.name} and I am ${this.age} yeard old.');

    }
}

const P1=new Person1("mallika", 23);
console.log(P1.name);
P1.hello();


const P2={
    name: "Vinay",
    age: 22,
    hi: function(){
        console.log('hello my name is ${this.name}');

    }
}
P2.hi();