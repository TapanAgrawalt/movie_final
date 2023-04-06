import React, { useEffect } from 'react'
import Movies from './components2/Movies/Movies'
import Footer from './Footer'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    if (message === "Login Succesfully") {
      toast.success("Login Succesfully");
    }
  }, [location]);
  return (
    
    <div>
      <ToastContainer autoClose={2000}/>
        <Nav/>
        <Movies/>
        <Footer/>
    </div>
  )
}

export default Home