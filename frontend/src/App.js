import React from 'react'


import {Advertiser, PublisherNavbar, PublisherAdSlots, Marketplace, Publisher } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import AdvertiserLogin from './components/AdvertiserLogin';
import AdvertiserNavbar from './components/AdvertiserNavbar';
import AdvertiserProducts from './components/AdvertiserProducts'



const App = () => {


  return (

    <Router>
    <div className="App">
      
       <div className="content">
      <div className="content">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />

          <Route
            exact
            path="/advertiser"
            element={
              <>
                <Advertiser />
              </>
            }
          />

          <Route
            exact
            path="/advertiserLogin"
            element={
              <>
                <AdvertiserLogin />
              </>
            }
          />

          <Route
            exact
            path="/advertiserDashboard"
            element={
              <>
                <AdvertiserNavbar /> <AdvertiserProducts />  
              </>
            }
          />

        <Route
            exact
            path="/publisherDashboard"
            element={
              <>
                <PublisherNavbar /> <PublisherAdSlots />
              </>
            }
          />


          <Route
            exact
            path="/advertiserMarketplace"
            element={
              <>
                <AdvertiserNavbar /> <Marketplace />
              </>
            }
          />

          <Route
                exact
                path="/publisher"
                element={
                  <>
                    <Publisher />
                  </>
                }
              />

              <Route
                exact
                path="/publisherDashboard"
                element={
                  <>
                    <PublisherNavbar /> <PublisherAdSlots />
                  </>
                }
              />

          

         
        </Routes>
      </div>
    </div>
    </div>
  </Router>





    
  )
}

export default App