import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './components/routers/AppRouter'


const init= () => {
  // return{
  //   logged:true,
  //   name:'Daylin temporal'
  // }
  return JSON.parse(localStorage.getItem('usser')) || {logged:false} //si no se encuentra la info en el localstore o el usuario por cualquier motivo no esta entonces q ponga logger false
  
}


export const HeroesApp = () => {

  const [usser, dispatch] = useReducer(authReducer,{},init)

  useEffect(() => {//usamos el efecto para almacenar en el localstore el usuario
    
    if(!usser) return //si el usuario no existe no se hace nada

    localStorage.setItem('usser', JSON.stringify(usser))//de esta manera se mantiene visible el usuario q esta logueado

  }, [usser])
  

  return (//AuthContext.Provider es para q todos sus hijos tengan acceso a contexto
    <AuthContext.Provider value={{usser, dispatch}}>
      <AppRouter/>
    </AuthContext.Provider>
    
  )
}
