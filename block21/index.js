//API url
const api = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT'


//Getting the event data
async function getData(section) {
  try {
    const response = await fetch(`${api}/${section}`)
    const json = await response.json()
    return json.data;
  } catch (err) {
    console.log(err)
  }
}

//Render Events
async function renderEvents() {
  const eventObj = await getData('events')
  console.log(eventObj)
  const eventList = document.querySelector('#eventList')

  for (const [key, elm] of Object.entries(eventObj)) {
    console.log(elm)
    const newRow = document.createElement('div');
    newRow.classList.add('flexed')
    for (const [key2, elm2] of Object.entries(elm)) {
      const newElm = document.createElement('p')
      newElm.classList.add('section')
      newElm.textContent = `${key2}: ${elm2}`
      console.log(newElm)
      newRow.append(newElm)
    }
    const newElm = document.createElement('button')
    newElm.id = `del${elm.chor}`;
    newElm.textContent = 'Delete';
    newRow.append(newElm)
    console.log(newElm)
    eventList.append(newRow)
  }
}

//Adding an event to the data
async function addEvent(n, d, t, l, desc) {
  try {
    const nam = document.querySelector(n).value
    const dat = document.querySelector(d).value
    const tim = document.querySelector(t).value
    const loca = document.querySelector(l).value
    const descript = document.querySelector(desc).value
    console.log(dat, nam, tim, loca, descript)
    const response = await fetch(`${api}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name: 'nam',
            description: 'descript',
            date: `Tuesday`, // Date ISO string
            location: 'loca'
          }
        ),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

//Deleting an event from the data
async function deleteEvent(params) {

}




async function run() {
  renderEvents()
}

run()