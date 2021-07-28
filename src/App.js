import React, { useState } from "react"

import NavHeader from "./components/NavHeader"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, Contact, LoanProducts, Resources, Team } from "./pages"

export default function App() {
  return (
    <>
      <Router>
        <NavHeader />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route
            path="/loanproducts"
            exact
            component={() => <LoanProducts />}
          />
          <Route path="/resources" exact component={() => <Resources />} />
          <Route path="/team" exact component={() => <Team />} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
