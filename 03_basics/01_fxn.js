// //function means creating package of the code

// function orderTea(teaType){
//     function confirmOrder(){
//         return 'Order confirmed for chai';
//     }
//     return confirmOrder()
// }
// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/////////////////////////////////////////////////
function makeTea(typeOfTea) {}
function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order);
