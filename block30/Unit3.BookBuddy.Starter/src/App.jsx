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
          <Route path='/' element={<Books setBookId={setBookId} loading={loading} setLoading={setLoading} />}></Route>
          <Route path='/BookDetails' element={<SingleBook token={token} bookId={bookId} loading={loading} setLoading={setLoading} />}></Route>
          <Route path='/Account' element={<Account loading={loading} setLoading={setLoading} token={token} setToken={setToken} setBookId={setBookId} />}></Route>
          <Route path='/Register' element={<Register setLoading={setLoading} token={token} setToken={setToken} />}></Route>
          <Route path='/Login' element={<Login setLoading={setLoading} token={token} setToken={setToken} />}></Route>
          <Route path='/LoginRegister' element={<LoginRegister setLoading={setLoading} />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
