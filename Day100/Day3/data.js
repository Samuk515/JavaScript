const countries = ["India", "USA", "Germany", "Australia", "Japan","Nepal"];
// Get the unordered list element with id "datalist " from the HTML document
const dataList = document.getElementById("datalist");
// Using for.. of Loop to iterate through the array of countries 
for(name of countries){
    // it willl add a new list of countries with html tag <li> to the unordered list wiht id "datalist"
    dataList.innerHTML += `<li>${name}</li>`;
}