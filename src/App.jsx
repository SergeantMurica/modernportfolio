import React, { useState } from 'react'
import {Container, Grid2} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from "./pages/Resume/Resume.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Homepage from "./pages/Home/Home.jsx";
import './App.css'


function App() {

  return (
    <Container className="main_container">
      <Grid2 container spacing={10}>
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Profile/>
        </Grid2>
        <Grid2 item size="auto" >
          <Router>
            <Header/>
            <div className="header_container">
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="/Blog" element={<Blog/>}/>
                <Route path="/Contact" element={<Contact/>}/>
              </Routes>
            </div>
          </Router>
          <Footer/>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default App;


