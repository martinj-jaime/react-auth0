import React from 'react'
import './App.css'

import { useAuth0 } from '@auth0/auth0-react'

// Components Imports
import LoginButton from './components/LoginButton/LoginButton'
import Profile from './components/Profile/Profile'
import Logout from './components/Logout/Logout'

function App() {

  const { isAuthenticated, isLoading } = useAuth0()

  // if (isLoading) return <h1>loading...</h1>

  return (
    <div className='App'>

      <h1>Aplicación</h1>
      {
        isAuthenticated ? <Logout /> : <LoginButton /> 
      }
      <Profile /> 
      
    </div>
  );
}

export default App;
