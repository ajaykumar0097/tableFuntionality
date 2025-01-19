import React from 'react'
import Navbar from './components/Navbar'
import Createuser from './components/Createuser'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import UpdateUser from './components/UpdateUser'

const AddUser = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={ <Createuser/>}/>
        <Route exact path="/read" element={ <Read/>}/>
        <Route exact path="/edit/:id" element={ <UpdateUser/>}/>
    </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default AddUser
