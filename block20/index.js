//Add numbers to number bank
function addNum(src, save) {
  try {
    const input = document.querySelector(src)
    console.log(`${input} has been seen!`)
    //I Looked this one up
    if (/[a-zA-Z]/.test(input.value)) {
      console.log(`${input.value} has letters you dingus!`)
      return
    }

    console.log(`${input.value} has no letters!`)
    const saveFile = document.querySelector(save)
    saveFile.textContent = `${saveFile.textContent} ${input.value.trim()}`

    document.querySelector(src).value = '';

  } catch {
    console.log("Sorry an error has a accured in addNum")
  }
}

//Sort 1 number in number bank
function sortFirst(src, odd, even) {
  const input = document.querySelector(src)
  console.log(input.textContent)
  const numArray = input.textContent.split(" ")
  console.log(numArray)
  const nextNum = Number(numArray.shift())

  console.log(typeof (nextNum))
  console.log(numArray)

  input.textContent = numArray.reduce((acc, cur) => `${acc} ${cur}`, ``);

  if (nextNum % 2 === 1) {
    document.querySelector(odd).textContent = `${document.querySelector(odd).textContent} ${nextNum}`
  } else {
    document.querySelector(even).textContent = `${document.querySelector(even).textContent} ${nextNum}`
  }
}

//Sort all numbers
function sortAll(src, odd, even) {
  const input = document.querySelector(src)
  const numArray = input.textContent.split(' ')
  numArray.forEach(element => {
    if (element % 2 === 1) {
      document.querySelector(odd).textContent = `${document.querySelector(odd).textContent} ${element}`
    } else {
      document.querySelector(even).textContent = `${document.querySelector(even).textContent} ${element}`
    }
  });
  input.textContent = '';
}