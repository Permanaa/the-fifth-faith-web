import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import pages from './pages'
import appRoute from './configs/appRoute'
import './styles/global.scss'

function App() {
  return (
    <Switch>
      {appRoute.map(({name, exact, path}) => {
        const props = { path, exact, component: pages[name]}
        return <Route {...props} key={name} />
      })}
    </Switch>
  );
}

export default withRouter(App);
