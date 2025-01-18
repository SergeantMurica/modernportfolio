import React from 'react';
import {Container, Grid2} from "@mui/material";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SmallScreenProfile from "./components/Profile/SmallScreenProfile.jsx";
import useIsMobile from "./hooks/IsMobile.jsx";
import './App.css';

const App = () => {
  const isMobile = useIsMobile(1200);

  return (
      <Container className="main-container">
          <Grid2
              container
              spacing={{ xs: 2, sm: 2, md: 3, lg: 5 }}
          >
              {/* Profile Section */}
              <Grid2
                  item
                  size={{xs: 12, sm: 12, md: 12, lg: 4}}
              >
                  {isMobile ? <SmallScreenProfile /> : <Profile />}
              </Grid2>

              {/* Main Content Section */}
              <Grid2
                  item
                  size={{xs: 12, sm: 12, md: 12, lg: 8}}
              >
                  <Header />
                  <Footer />
          </Grid2>
        </Grid2>
      </Container>
  );
};

export default App;


