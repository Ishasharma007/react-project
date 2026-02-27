import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Course from "../pages/Course"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog/" element={<Blog />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="about/" element={<About />} />
      <Route path="course/" element={<Course />} />
    </Routes>
  )
}

export default AppRoutes
