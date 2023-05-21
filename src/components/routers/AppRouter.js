import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <div>
        
        <BrowserRouter>

            <Routes>

               {/* <Route path="/login" element={<LoginScreen/>}/>*/}

              <Route path='/login' element={
                <PublicRoute>
                  <LoginScreen/>
                </PublicRoute>
              } />

                <Route path='/*' element={
                  <PrivateRoute>
                    <DashboardRoutes />
                  </PrivateRoute>
                } />

                {/*<Route path='/*' element={<DashboardRoutes/>}/>*/}{/**se pone ese path para q todas las rutas si no son login sean manejadas por /* */}
        
            </Routes>

        </BrowserRouter>
    </div>
  )
}
