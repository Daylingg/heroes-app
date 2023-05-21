import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

export const PublicRoute = ({children}) => {

    const {usser} = useContext(AuthContext)

    return  usser.logged //si el usuario esta logueado
            ? <Navigate to='/marvel' /> //si esta el usuario autenticado se saca de ahi 
            :children //muestro o renderizo sus hijos
}
