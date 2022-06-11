import React from 'react'
import Navbar from "../../componentes/Navbar";
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import Navegation from "../../componentes/Navegation"
import { NoEncryptionOutlined } from '@material-ui/icons';
import "./Home.css"
const Home = () => {
  const claseNavegation = {
    padding: "10px",
    height: "40vmin",
  }

  return (
    
      <themeProvider >
        <Navbar />
          <Button variant='contained' color='primary'>
            boton
          </Button>
          <Button variant='contained' color='secondary'>
            boton
          </Button>
          <div style={{paddingTop:"20px", height:"600px"}}>
          <Navegation  />
          </div>
      </themeProvider>
      
    
  )
}

export default Home