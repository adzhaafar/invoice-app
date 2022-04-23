import React from 'react'
import Navbar from '../components/Navbar';
import Actions from '../components/Actions';
import GeneralInfo from "../components/GeneralInfo";
import PricingInfo from "../components/PricingInfo";

function Invoice() {
  return (
    <>
        <Navbar />
        <Actions />
        <GeneralInfo /> 
        <PricingInfo />     
    </>
  )
}

export default Invoice