import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Header from "../pages/Header";
import HelpCenter from '../pages/HelpCenter';
import OrderTracking from '../pages/OrderTracking';
import Login from '../authentication/Login';
import Register from "../authentication/Register";
import Fashoin from '../pages/NavPages/Fashoin';
import Men from '../pages/NavPages/Men';
import Women from '../pages/NavPages/Women';
import Childern from '../pages/NavPages/Childern';
import Footer from "../components/Footer";
import Step_PreviousPage_Button from "../components/Step_PreviousPage_Button";

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />
        <Route path='/OrderTracking' element={<OrderTracking />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />


        <Route path="/Fashoins" element={<Fashoin/>}/>
        <Route path="/MenS" element={<Men/>}/>
        <Route path="/Womens" element={<Women/>}/>

        <Route path="/Childerns" element={<Childern/>}/>
      </Routes>
    </>
  );
};

export default RouteComponent;
