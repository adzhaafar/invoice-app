// react
import React from "react";
// components
import InvoiceHome from "../components/InvoiceHome";
import Navbar from "../components/Navbar";
import FilterCreateInvoices from "../components/FilterCreateInvoices";

function Home() {
  return (
    <>
        <Navbar /> 
        <FilterCreateInvoices /> 
        <InvoiceHome /> 
    </> 
  )
}

export default Home

