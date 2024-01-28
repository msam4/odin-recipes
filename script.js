// Change result and its id to grilled mac and cheese sandwich
let result = document.getElementById("result");
const url = "https://www.themealdb.com/meal/52829-Grilled-Mac-and-Cheese-Sandwich";

console.log("Hello world!")

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
