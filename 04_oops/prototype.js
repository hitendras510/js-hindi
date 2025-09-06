Array.prototype.speak = function(){
    return `${this.type} makes a sound`;
};
Array.prototype.hitendra = function () {
    return `custom method ${this}`;
};

let myArray = [1,2,3];
console.log(myArray.hitendra());
let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.hitendra());//////////////////////////////////

