import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_signin/Sign_in';
import Sign_up from './components/signup_signin/Sign_up';
import { Routes, Route } from "react-router-dom";
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  })

  return (
    <>
      {
        data ? (
          <>
          
            <Navbar />
            <Newnav />
            <Routes>
              <Route path="/" element={<Maincomponent />} />
              <Route path="/login" element={<Sign_in />} />
              <Route path="/register" element={<Sign_up />} />
              <Route path="/getproductsone/:id" element={<Cart />} />
              <Route path="/buynow" element={<Buynow />} />
            </Routes>

            <Footer />

          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
        )
      }

    </>

  );
}

export default App;
