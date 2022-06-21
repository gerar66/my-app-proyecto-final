import React, {useState, useEffect} from 'react'
import Navbar from "../../componentes/Navbar";
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';
import Navegation from "../../componentes/Navegation"
import { NoEncryptionOutlined } from '@material-ui/icons';
import "./Home.css"
import axios from 'axios';
import CardPokemon from '../../componentes/CardPoquemon';
import TablaPokemon from '../../componentes/TablaPokemon';

const Home = () => {
  const claseNavegation = {
    padding: "10px",
    height: "40vmin",
  };
  /* const [name, setName] = useState();
  const [url, setUrl] = useState(); */

  const [resultados, setResultados] = useState();

  /* const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  }; */

  const handleTraer = () => {
    axios({
      method: "get",
      url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    }).then((response) => {
      console.log(response.data.results); //esto viene del postman objetos del results//
     setResultados(response.data.results)
     
    });
  };
  useEffect(() => {
   handleTraer()
  }, [])
  

  return (
    <div>
      <themeProvider>
        <Navbar />
        <Button variant="contained" color="primary">
          boton
        </Button>
        <Button variant="contained" color="secondary">
          boton
        </Button>
        <div style={{ paddingTop: "20px", height: "600px" }}>
          <Navegation />
        </div>
      </themeProvider>
      
      
      <div>
      {resultados?.map(resultado => {
        return(
          <CardPokemon resultado={resultado}/>
        )}
      )}
      <TablaPokemon resultados={resultados}/>
         </div> 
    </div>
  );
  
};

export default Home;
