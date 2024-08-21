import { Cart } from "./componets/Cart"
import { Footer } from "./componets/Footer"
import { Header } from "./componets/Header"
import Home from "./componets/pages/Home"

import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

export const App=()=>{
  return(
    <>
    {/* 
   
    <FoodCard/>
   <Places/>
   
       */}

<Router>
<Header/>




<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      {/* Other routes */}
    </Routes>

    <Footer/>
  </Router>

    </>
  )
}