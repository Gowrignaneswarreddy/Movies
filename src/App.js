
import React from 'react'
import { BrowserRouter,Route,Routes,route } from 'react-router-dom'
import Parts from './Parts'
import Infopage from './page/Infopage'
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Parts/>}></Route>
  <Route path="/inner" element={<Infopage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default Routing