const person = {
    name: "hitendra",
    greet (){
        console.log(`hi, im  ${this.name}`);
    },
};

person.greet();
const greetFunction = person.greet
greetFunction()