import "./Header.css";

import Navbar from "../Navbar/Navbar"
import TextBox from "../TextBox/TextBox"

import React from 'react'

const Header = () => {
  return (
   <section className="header">
    <Navbar/>
    <TextBox/>

   </section>
  )
}

export default Header