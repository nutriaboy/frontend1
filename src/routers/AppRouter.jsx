import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { AdminRouter } from './AdminRouter'
import { PublicRouter } from './PublicRouter'
import { AuthRouter } from './AuthRouter'
import '../css/style.css'
import '../css/util.css'



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/*"
          element={
             <PrivateRouter >
              <AdminRouter />
            </PrivateRouter> 
          } />

        <Route
          path="/auth/*"
          element={
            <PublicRouter >
              <AuthRouter />
            </PublicRouter>
          } />


      </Routes>
    </BrowserRouter>
  )
}
