const person = {
    name: "hitendra",
    greet (){
        console.log(`hi, im  ${this.name}`);
    },
};

person.greet();
const greetFunction = person.greet
greetFunction()

const boundGreetFunction = person.greet.bind({name: "john"});
boundGreetFunction();

//bind call and apply
