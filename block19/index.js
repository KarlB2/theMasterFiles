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