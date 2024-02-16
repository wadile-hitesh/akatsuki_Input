import { useState } from 'react'
import service from './appwrite/service'
import './App.css'
import './index.css'
import { Outlet } from 'react-router-dom'
function App() {

  

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
