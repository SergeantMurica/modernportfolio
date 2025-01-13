import React from 'react'
import {Container, Grid2} from "@mui/material";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'


const App = () => {

  return (
    <Container className="main_container">
      <Grid2 container spacing={{xs: 1.5, sm: 1.5, md: 1.5, lg: 5 }}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 4}}>
          <Profile/>
        </Grid2>
        <Grid2 item size='grow'>
          <Header/>
          <Footer/>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default App;


