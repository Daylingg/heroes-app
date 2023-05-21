import { types } from "../types/types";

// const state={
//     name: 'Daylin',
//     logged:true
// }

// const loginAction={ //asi se veria la action q se pasa en la funcion...sabemos q tiene un payload y q dentro de este hay varias cosas 
//     type: types.login,
//     payload:{
//         name:'Daylin'
//     }
// }

//funcion q recibe el state y una accion q es la q modifica el state
export const authReducer = (state={}, action) => {

    switch (action.type) {
        case types.login://se hace referencia al archivo types para ir verificando q tipo es si logout o login
            
            return{
                ...action.payload,
                logged:true
            }

        case types.logout:
            return {
                logged:false
            }
    
        default:
            return state //si no es ninguno de los casos q se pasaron q devuelva el estado a como estaba
    }

}
