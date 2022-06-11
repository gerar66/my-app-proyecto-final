import  {useState}  from 'react';
import './register.css';
import axios from 'axios';




function Register() {
  
  
  const [Email, setEmail] = useState()
  const [Clave, setClave] = useState()
  const [NombreCompleto, setNombreCompleto] = useState()
  const [UserName, setUserName] = useState()

  const handleClave = (e) => {
    setClave(e.target.value)
  }
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
      const handleNombreCompleto = (e) => {
        setNombreCompleto(e.target.value)
      }
        const handleUserName = (e) => {
          setUserName(e.target.value)
        }

        const handleAceptar = () => {
          axios({
            method:'post',
            url: 'http://localhost:4000/api/register',
            data: {
              "name": NombreCompleto,
              "username": UserName,
              "password": Clave,
              "email": Email, 
            }
          }).then(response =>{
            console.log(response.data);
            localStorage.setItem('idDeUsuario',response.data.id);
            localStorage.setItem('NombreCompleto',response.data.name);
            localStorage.setItem('Email',response.data.email);
            localStorage.setItem('UserName',response.data.username);
            window.location.href = "/home"
          })
        }
return (
      <div className="Formulario" >
        
       <h2>Ingresa tus datos</h2>
       <p>nombre completo</p>
       <input className='inputs' onChange={(e) => handleNombreCompleto(e)} ></input><br/>
       <p>nombre de usuario</p>
       <input className='inputs' onChange={(e) => handleUserName(e)}></input><br/>
       <p>email</p>
       <input className='inputs' onChange={(e) => handleEmail(e)}></input><br/>
       <p>clave</p>
       <input className='inputs' onChange={(e) => handleClave(e)}></input><br/>
       <button className='boton' onClick={() => handleAceptar()}>Aceptar </button>
      </div>
    );
  }

  
  export default Register;

 