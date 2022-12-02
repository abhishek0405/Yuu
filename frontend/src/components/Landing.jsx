import React from 'react';

import {useState, useEffect} from 'react'


import { useNavigate } from "react-router-dom";
import styles from "../style";
import { Web3Storage } from 'web3.storage'

import { Business, Billing, CardDeal, Testimonials, Footer, Navbar,  Hero, Advertiser} from "./";




function Landing () {

   
    const client = new Web3Storage({ token: process.env.REACT_APP_API_TOKEN })

    function makeFileObjects (obj, name) {
    
      const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
    
      const files = [
       
        new File([blob], name)
      ]
      return files
    }
  
    async function storeFiles (files) {
      
      const cid = await client.put(files)
      console.log('stored files with cid:', cid)
      return cid
    }
  
//     useEffect(() => {
//       //console.log(window.location.pathname)
      
//       var pubobj = {
//         name : "abc",
//         size : "5x4",
//         position : "left of screen"
    
//       }
//       var files = makeFileObjects(pubobj, "file1.json")
//       console.log(files)
//       var cid = storeFiles(files)
//       console.log("content saved on: ", cid)
//   }, []);
    

    return (
        <div className="Landing">
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
                </div>

                <div className={`bg-gray-gradient ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
                </div>
                
                <div className={`bg-gray-gradient ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    
                    <Business />
                    
                    <Footer />
                </div>
                </div>
            </div>
          </div> 
    );

}


export default Landing;