import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import Garden from './core/Garden'
import Questions from './core/Questions'
import Answer from './core/Answer'



const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/answer" component={Answer} />
      </Switch>
    </div>
  )
}

export default MainRouter
