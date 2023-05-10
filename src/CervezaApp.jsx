import { AuthProvider } from './context/AuthContext'
import { CervezaProvider } from './context/CervezaContext'
import { UsuarioProvider } from './context/UsuarioContext'
import { AppRouter } from './routers/AppRouter'


export const CervezaApp = () => {

  return (
    <AuthProvider>
      <UsuarioProvider>
        <CervezaProvider>
          <AppRouter />
        </CervezaProvider>
      </UsuarioProvider>
    </AuthProvider>
  )
}
