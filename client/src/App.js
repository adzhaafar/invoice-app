// react
import React from 'react';
// pages
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
// react router
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home route */}
        <Route path="/" element={< Home/>}/ >
        {/* invoice route */}
        <Route path="/:invoiceId" element={< Invoice /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
