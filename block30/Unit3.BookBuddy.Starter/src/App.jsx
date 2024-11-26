import { useState } from 'react'
import bookLogo from './assets/books.png'
import Navbar from './components/Navigations'
import { Routes, Route } from 'react-router-dom'
import Account from './pages/Account'
import SingleBook from './pages/SingleBook'
import Register from './pages/Register'
import Login from './pages/Login'
import LoginRegister from './pages/LoginRegister'
import Books from './pages/Books'

const api = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"


function App() {
  const [token, setToken] = useState(null)
  const [bookId, setBookId] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Navbar token={token} setToken={setToken} setLoading={setLoading} />
      <h1><img id='logo-image' src={bookLogo} />Library App</h1>

      <div id='page'>
        <Routes>
          <Route path='/' element={<Books api={api} setBookId={setBookId} loading={loading} setLoading={setLoading} />}></Route>
          <Route path='/BookDetails' element={<SingleBook api={api} token={token} bookId={bookId} loading={loading} setLoading={setLoading} />}></Route>
          <Route path='/Account' element={<Account api={api} loading={loading} setLoading={setLoading} token={token} setToken={setToken} setBookId={setBookId} />}></Route>
          <Route path='/Register' element={<Register api={api} setLoading={setLoading} token={token} setToken={setToken} />}></Route>
          <Route path='/Login' element={<Login api={api} setLoading={setLoading} token={token} setToken={setToken} />}></Route>
          <Route path='/LoginRegister' element={<LoginRegister setLoading={setLoading} />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
