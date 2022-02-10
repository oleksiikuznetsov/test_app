import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Users from './views/Users';
import LoginPage from './views/LoginPage';
import UserIdPage from './views/UserIdPage';
import Navigation from './routes/Navigation';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import './styles/App.css';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  )
  const [userName, setUserName] = useState(localStorage.getItem("userName"))
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin")

  return (
    <Router>
      <Navigation
        userName={userName}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setIsAdmin={setIsAdmin}
      />
      <Switch >
        <Route exact path="/" render={() => {
            if (isLoggedIn) return <Redirect to="/users" />
            return <Redirect to="/login" />
          }} 
        />
        <PublicRoute isLoggedIn={isLoggedIn} path="/login" exact>
          <LoginPage
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
            setIsAdmin={setIsAdmin}
          />
        </PublicRoute>
        <PrivateRoute isLoggedIn={isLoggedIn} path="/users" exact>
          <Users isAdmin={isAdmin}/>
        </PrivateRoute>
        <PrivateRoute isLoggedIn={isLoggedIn} path="/users/:id" exact>
          <UserIdPage isAdmin={isAdmin}/>
        </PrivateRoute>
      </Switch >
    </Router>
  )
}
