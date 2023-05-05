import { AuthProvider } from './context/AuthContext'
import './css/style.css'
import './css/util.css'
import { AppRouter } from './routers/AppRouter'


export const CervezaApp = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
