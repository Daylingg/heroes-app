import { Navbar } from "../ul/NavBar"
import { MarvelSceen } from '../marvel/MarvelSceen'
import { SearcScreen } from '../searc/SearcScreen'
import { DcScreen } from '../dc/DcScreen'
import { Route, Routes } from "react-router-dom"
import { HeroeScreen } from "../heroe/HeroeScreen"


export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">{/**clase de bootstrap para dar espacios */}
    <Routes>
        
        <Route path="dc" element={<DcScreen/>} />
        <Route path="/marvel" element={<MarvelSceen/>}/>
        <Route path="/search" element={<SearcScreen/>}/>
        <Route path="/heroe/:heroeId" element={<HeroeScreen />}/>{/**al poner el :heroeId decimos q despues de heroe va un id */}
        <Route path="/" element={<MarvelSceen/>}/>
        
    </Routes>
    </div>
    </>
  )
}
