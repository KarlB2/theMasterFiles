//Random pool of freelancers
const freelancerPool = [
  { name: "Jermal Green", price: 25, occupation: "gardener" },
  { name: "Elli Ticity", price: 51, occupation: "programmer" },
  { name: "Mr. Gram", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//Get the table from the html
const table = document.querySelector("#jobTable")

//Updates the average freelancer price
function calculateAveragePrice(elm) {
  // TODO: use `reduce`
  average = elm.reduce((total, element) => total + element.price, 0) / elm.length

}

//Render the table and counter
function render() {
  // Render the table
  //Assign table to the varible
  const list = document.querySelector("#jobTable");
  const randomPerson = freelancerPool[Math.floor(Math.random() * freelancerPool.length)]
  console.log(randomPerson)

  const row = document.createElement("tr");
  row.classList.add("row")

  //Using the forOf loop to add colums with text
  for (const [key, value] of Object.entries(randomPerson)) {
    //Adding the table area and text node
    const newColum = document.createElement("th")
    const text = document.createTextNode(value)
    newColum.classList.add("colum", key)
    //Appending the text to the colum and the colum to the row
    newColum.appendChild(text)
    row.append(newColum)
  }
  //appeneds the row to the table
  list.appendChild(row)

  //Render the counter
  //Creates a list of all the elements with the class "Price"
  const nodeList = document.querySelectorAll(".price");

  //reduce does not seem to work on node list so this is my makeshift reduce function
  let acc = 0;
  nodeList.forEach(element => acc += Number(element.textContent));

  //Getting the average
  const average = Math.round((acc / nodeList.length) * 10) / 10;

  //Replacing the textContect of counter with the updated message
  document.querySelector("#counter").textContent = `The average is ${average}`
}
render()

//Loop the script every 
const addShapeIntervalId = setInterval(() => {
  render();
}, 1000)

// const shapes = [
//   {
//     color: "red",
//     size: "small",
//   },
//   {
//     color: "yellow",
//     size: "small",
//   },
// ];

// /** Adds a shape with random properties to the `shapes` array */
// function addShape() {
//   const color = colors[Math.floor(Math.random() * colors.length)];

//   // TODO: Randomize the size of the shape
//   const size = "small";

//   shapes.push({ color, size });
// }

// // === Render ===
// // To "render" is to update the DOM to reflect the current state.
// // In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
// function render() {
//   // Render the squares
//   const squareList = document.querySelector("#squares");
//   const squareElements = shapes.map((shape) => {
//     const squareElement = document.createElement("li");
//     squareElement.classList.add(shape.color, shape.size);
//     return squareElement;
//   });
//   squareList.replaceChildren(...squareElements);

//   // TODO: Render the circles
// }

// // === Script ===
// // In this section, we call the functions that we've defined above.

// // `setInterval` will call the callback function every 1000 milliseconds (1 second)
// // and return an interval ID that we can use to stop the interval later.
// // Calling `clearInterval(addShapeIntervalId)` will stop the interval.
// const addShapeIntervalId = setInterval(() => {
//   addShape();
//   render();

//   // TODO: Stop adding shapes if we've reached the maximum number of shapes
// }, 1000);

// render(); // We call this function once to render the initial state
