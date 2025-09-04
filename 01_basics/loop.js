// Loop challenges

// 1. write a do while loop that adds number from 1 to 3 and stores the result in a variable named total

let total = 0
let i = 1;
do{
    total += i;
    i++;
} while (i <=3);
// console.log(total);
/////////////////////////////////////////////////////

 let multipliedNumbers = []
 let numbers = [2,4,6]

  for (let l = 0; l < numbers.length; l++) {
    takeNumber = numbers[l] * 2;
    multipliedNumbers.push(takeNumber);
  }
//   console.log(multipliedNumbers);
// //////////////////////////////////////////


let cityList=[]
let cities = ["paris","new york" ,"tokyo"];


for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);