import  {useState}  from 'react';

import axios from 'axios';


function Login() {
  
  
  const [Email, setEmail] = useState()
  const [Clave, setClave] = useState()
  

  const handleClave = (e) => {
    setClave(e.target.value)
  }
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
      

        const handleAceptar = () => {
          axios({
            method:'post',
            url: 'https://reqres.in/api/users',
            data: {
              
                "email":"dddddd333@gmail.com",
                "password":"farganxwq23"
            }
          }).then(response =>{
            console.log(response.data);
            localStorage.setItem('idDeUsuario',response.data.id);
            
            localStorage.setItem('Email',response.data.email);
            
            window.location.href = "/home"
          })
        }
return (
      <div className="Formulario" >
        
       <h2>login</h2>
       
       <p>email</p>
       <input className='inputs' onChange={(e) => handleEmail(e)}></input><br/>
       <p>clave</p>
       <input className='inputs' onChange={(e) => handleClave(e)}></input><br/>
       <button className='boton' onClick={() => handleAceptar()}>Aceptar </button>
      </div>
    );
  }

  
  export default Login;