import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/organisms';
import { Footer } from './components/organisms';
import './App.css';

const Title = styled.h1`
  font-family: baskerville;
  font-size: 2em;
`
const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
      <Header title='NODULES OF FLINT'/>
      <Footer name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'/>
    </Container>
    );
  }
}

export default App;
