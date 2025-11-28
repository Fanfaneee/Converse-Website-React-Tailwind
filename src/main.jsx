/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Styleguide from "./Styleguide.jsx";
import Product from "./Product.jsx";
import App from './App.jsx'
import AppLayout from "./AppLayout.jsx";
import Catalogue from "./catalogue.jsx";
import Panier from "./Panier.jsx";
import ProductPage from "./component/PartageEtatCouleur.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>

          <Route path="/" element={<App />} />
          <Route path="/product" element={<Product />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);