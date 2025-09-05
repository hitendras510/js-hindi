// // Loop challenges

// // 1. write a do while loop that adds number from 1 to 3 and stores the result in a variable named total

// let total = 0
// let i = 1;
// do{
//     total += i;
//     i++;
// } while (i <=3);
// // console.log(total);
// /////////////////////////////////////////////////////

//  let multipliedNumbers = []
//  let numbers = [2,4,6]

//   for (let l = 0; l < numbers.length; l++) {
//     takeNumber = numbers[l] * 2;
//     multipliedNumbers.push(takeNumber);
//   }
//   console.log(multipliedNumbers);
// //////////////////////////////////////////

// let cityList=[]
// // let cities = ["paris","new york" ,"tokyo"];

// for (let c = 0; c < cities.length; c++) {
//     const myCity = cities[c];
//     cityList.push(myCity);
// }
// console.log(cityList);

// ///////////////////////////////////////////////////////////////////////////////////////

// 4. write a for loop that loops through ( green tea and black tea and chai and oolong tea) and stops the loop when it finds chai , store all teas before chai in a new array named selectedTeas

// let teas = ["green tea", "black tea", "chai", "oolong tea" ];
// let selectedTeas = []

// for( let i = 0; i < teas.length; i++){
//   if(teas[i]== 'chai'){
//     break;
//   }
//   selectedTeas.push(teas[i])
// }
// console.log("selectedTeas")

// /////////////////////////////////////////

//  let cities = ["london","New york","Paris","berlin"];
//  let visitedCities=[];

//  for (let i = 0; i < cities.length; i++) {
//   if(cities[i] === " paris"|| cities[i]=== "Paris"){
//     continue;
//   }
//  visitedCities.push(cities[i])

//  }
//  console.log(visitedCities);

// //////////////////////////////////////////////////////////////

// let numbers=[1,2,3,4,5];
// let smallNumbers=[];

// for( const num of numbers){
//   if (num === 4){
//     break;
//   }
//   smallNumbers.push(num);
// }
// console.log(smallNumbers);
// ///////////////////////////////////////////////////

// let worldCites = {
//   "sydney": 5000000,
//   "Tokyo": 9000000,
//   "Berlin": 3500000,
//   "Paris": 2200000,
// }
// let largeCites = {};

// for (const city in worldCites) {
//   if (worldCites[city] < 3000000) {
//     continue;
//   }
//   largeCites[city] = worldCites[city];
// }
// console.log(largeCites);

//  /////////////////////////////////////////

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);
////////////////////////////////////////////

let Cities = ["Berlin", "Tokyo", "Sydney", "paris"];
let traveledCities = [];

Cities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);4
///////////////////////////////////////////////////////////////

let myNumber = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
