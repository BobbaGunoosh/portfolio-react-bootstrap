import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Container>
      
      <Home />
    </Container>
    
  );
}

export default App;
