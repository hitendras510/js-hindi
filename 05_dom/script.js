// example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the para is changed!!";
  });

////Example 2 traversing the DOM

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

  /// example 3
  document.getElementById("changeOrder").addEventListener('click', function(){
    let coffeType = document.getElementById("coffeType");
    coffeeType.textContent = "Espresso";
    coffeType.style.backgroundColor = "brown"
  });

  //Example 4: Creating and Inserting Elements 

  document.getElementById("addNewItem").addEventListener('click', function(){

          let newItem = document.createElement('li')
          newItem.textContent = "Eggs"
          document.getElementById("shoppingList").appendChild(newItem)
 })

 ////example 5

 document.getElementById("removeLastTask").addEventListener('click', function(){
   let taskList = document.getElementById("taskList");
   taskList.lastElementChild.remove()
 });

 // ex6

 document.getElementById("clickMeButton").addEventListener("mouseover", function(){
    alert("KYA RE BKL");
 });
 
 
 ///ex7


 document.getElementById("teaList").addEventListener('click', function (event){
if (event.target && event.target.matches(".teaItem")){
    alert("You selected: " + event.target.textContent);
}
 });

 // ex 8

 document.getElementById("feedbackform").addEventListener('submit', function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
     document.getElementById(
        
     )
 });