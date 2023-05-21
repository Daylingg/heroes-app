import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

export const PrivateRoute = ({children}) => {

    const {usser} = useContext(AuthContext)

    const {search, pathname} = useLocation() //const location = useLocation() //puedo desestructurar location y obtener pathname y search
    //console.log(location)

    //localStorage.setItem('lastPath',location.pathname + location.search) //grabo la ultima path y se le pasa lo q esta en location.pathname
    localStorage.setItem('lastPath', pathname + search) 

    return usser.logged //si el usuario esta logueado
            ? children //muestro o renderizo sus hijos
            : <Navigate to='/login' /> //si no esta el usuario autenticado se redirige la navegacion al login

}
