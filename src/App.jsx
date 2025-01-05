import React, { useState } from 'react'
import {Container, Grid2} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import './App.css'
import {Home} from "@mui/icons-material";

const NavigationBar = () => {
    return (
        <nav>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    );
};

function App() {

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Profile/>
        </Grid2>
        <Grid2 item size="auto" >
          <Header/>
          <BrowserRouter>
            <NavigationBar />
            <div>
              <Routes>
                <Route path="/Portfolio" element={<Portfolio/>} />
                <Route path="/Resume" element={<Resume/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/Contact" element={<Contact/>} />
              </Routes>
            </div>
          </BrowserRouter>
          <Footer/>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default App;


