import React from 'react'
import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllPuppies from './pages/AllPuppies'
import AddPuppy from './pages/AddPuppy'
import SinglePuppy from './pages/SinglePuppy'
import './App.css'

const puppyApi = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT"

function App() {
  //State for puppy id
  const [pupId, setPupId] = useState(null)

  return (
    <>
      {/*Nav bar on top. Home | Puppies | Create New Puppy */}
      <NavigationBar />

      {/*The page will be displayed here*/}
      <div id='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AllPuppies' element={<AllPuppies pupId={pupId} setPupId={setPupId} api={puppyApi} />} />
          <Route path='/AddPuppy' element={<AddPuppy pupId={pupId} setPupId={setPupId} api={puppyApi} />} />
          <Route path='/PuppyDetails' element={<SinglePuppy pupId={pupId} setPupId={setPupId} api={puppyApi} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
