import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import Filter from "./Filter";

import DetailPage from "./DetailPage";
import TicketBookingPage from "./TicketBookingPage";
import BookingSite from "./BookingSite";
import { Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Carrer from "./components/Carrer";
import Contactus from "./components/Contactus";
import FAQS from "./components/FAQS";
import Feedback from "./components/Feedback";
// import Movies from './components/Movies';
import News from "./components/News";
import Notification from "./components/Notification";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Workwithus from "./components/Workwithus";
import Movies from "./components2/Movies/Movies";
import Location from "./components2/Location/Location";
import Zovies from "./components/Zovies";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
       <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/Carrer' element={<Carrer/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/FAQS' element={<FAQS/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Zovies' element={<Zovies/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Notification' element={<Notification/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Workwithus' element={<Workwithus/>}/>
        <Route path='/ticketbookingpage' element={<TicketBookingPage/>}/>
      </Routes>
      
    
     
    
    </div>
  );
}

export default App;
