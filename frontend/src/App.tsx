import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import routes from "./routes"

function App() {
  return (
    <Router>
      <div className="app">
        {/* nav bar */}
        <Navbar />
        {/* switch -- this finds the first route that matches the current url and renders its component (see routes/index.ts) */}
        <Switch>
          {routes.map(props => <Route {...props} />)}
        </Switch>
      </div>
    </Router>
  )
}

export default App
