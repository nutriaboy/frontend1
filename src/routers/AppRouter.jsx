import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from '../pages/Login'


export const AppRouter = () => {

    const Loading = () => {
        return (<h1>Loading ...</h1>)
    
      }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  )
}
