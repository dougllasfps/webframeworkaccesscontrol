import React, { Component } from 'react';

import './App.css';

import 'toastr/build/toastr.min'
import 'toastr/build/toastr.css'

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';

import 'fontawesome'

import Navbar from './common/template/Navbar'
import Footer from './common/template/Footer'
import Rotas from './common/template/Rotas'


import { HashRouter as Router } from 'react-router-dom';
import {Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Container fluid>
            <Rotas />
            </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;