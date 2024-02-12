import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home_page from './components/Home_page'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home_page} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
