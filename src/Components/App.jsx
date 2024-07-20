import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../ElearningWeb/Home'
import Login from '../ElearningWeb/User/Login'
import Nav from '../ElearningWeb/Nav'
import Register from '../ElearningWeb/User/Register'
import Footer from '../ElearningWeb/Footer'
import LiveClass from '../ElearningWeb/LiveC.jsx/LiveClass'
import CourseForm from '../ElearningWeb/CourseManagement/CourseForm'
import CourseManagement from '../ElearningWeb/CourseManagement/CourseManagement'
import Mixer from '../ElearningWeb/Courses/Mixer'



export default function App() {
  return (
    <>
    {/* <h1>This is App</h1> */}
    <BrowserRouter>
    <Nav/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/live' element={<LiveClass/>}/>
        <Route path='/courseF' element={<CourseForm/>}></Route>
        <Route path='/courseM' element={<CourseManagement/>}></Route>
        <Route path='/mixture' element={<Mixer/>}></Route>
    </Routes>
    <Footer/>


    </BrowserRouter>
    
    
    
    
    </>
  )
}
