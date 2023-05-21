import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from "../../types/types";



export const LoginScreen = () => {

  //useNavigate nos da una funcion q nos permite navegar a otras pantallas
const navigate=useNavigate()

const {dispatch} = useContext(AuthContext) //del usecontext solo necesitamos el dispatch

  const handleLogin=()=>{
    
    const action = {
      type: types.login,
      payload:{name :'Daylin' }//esto es lo q se va a insertar
    }

    dispatch(action)

    const lastPath = localStorage.getItem('lastPath') || '/marvel' //en la variable lastPath se guarda lo q se obtiene del localstorage con el nombre de lastParam...eso debe tener guardada el ultimo path donde estuvo el usuario....si no ha entrado nunca o no ha navegado va directo a marvel

    navigate( lastPath , {//con esta funcion decimos q vaya a la pag de marvel y al poner replace en true no se puede virar a la pag anterior
      replace:true//reemplaza la pag en la q estaba por la actual
    })
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr/>

        <button className='btn btn-primary'
        onClick={handleLogin}
        >Login </button>
    </div>
  )
}