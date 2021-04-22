import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Garden from './core/Garden'
import Questions from './core/Questions'
/*import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin' 
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu' */


const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  )
}

export default MainRouter
