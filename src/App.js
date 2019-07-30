import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Components/Navigation'
import Images from './Screens/Images'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Route path="/" exact component={Images} />
        <Route path="/images/" component={Images} />
      </Router>
    </div>
  );
}

export default App
