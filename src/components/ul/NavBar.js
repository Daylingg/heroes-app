import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const navigate=useNavigate()
    const {usser, dispatch} = useContext( AuthContext) //const context = useContext( AuthContext) //puedo desestructurar el context para q me de el usser

    //console.log(context)

    const handleLogout=()=>{
        
        // const action={
        //     type: types.logout
            
        // }

        // dispatch(action)
        dispatch({type:types.logout})

        navigate('/login',{
            replace:true
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                {/**({isActive})=> `nav-item nav-link`+ (isActive)?'active':'' se desestructura la propiedad para q devuelva true o false, si es verdadera se pone la clase nav-item + se pregunta si es verdadero entonces se agrega la clase active sino se queda */}
                    <NavLink 
                        className={({isActive})=>'nav-item nav-link ' + (isActive? 'active':'')}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>'nav-item nav-link ' + (isActive? 'active':'')}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>'nav-item nav-link ' + (isActive? 'active':'')}
                        to="/search"
                    >
                       Search
                    </NavLink>
                </div>
            </div>


            {/**con las clases del bootstrap se separa el bloque del logout a la derecha justify-content-end */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info"  >{usser.name}</span>
                    <button 
                        className="nav-item nav-link btn" 
                        
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}