import { AuthProvider } from './context/AuthContext'
import { UsuarioProvider } from './context/UsuarioContext'
import './css/style.css'
import './css/util.css'
import { AppRouter } from './routers/AppRouter'


export const CervezaApp = () => {

  return (
    <AuthProvider>
      <UsuarioProvider>
      <AppRouter />
      </UsuarioProvider>
    </AuthProvider>
  )
}
