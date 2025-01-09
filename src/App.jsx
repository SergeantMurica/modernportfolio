import React from 'react'
import {Container, Grid2} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'


function App() {

  return (
    <Container className="main_container">
      <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 10, lg: 30 }}>
        <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3}}>
          <Profile/>
        </Grid2>
        <Grid2 item size='grow' >
          <Header/>
          <Footer/>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default App;


