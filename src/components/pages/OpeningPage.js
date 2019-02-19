import React, { Component } from 'react';
import styled from 'styled-components';
import { About } from '../atoms';
import { Header, Footer } from '../organisms';
import loading from '../atoms';
import { Link } from 'react-router-dom'

const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100vw;
  height: 100vh;
`;

const text = {
  'color': 'white'
}

const GifContainer = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

class OpeningPage extends Component {
  render() {
    const imageClick = () => {
      console.log('Click');
    }
    return (
        <Container>
          <Header title='NODULES OF FLINT'/>
          <Link to="/rockspage">
              <GifContainer>
                <img src={require('../atoms/Loading.gif')} onClick={() => imageClick()}/>
              </GifContainer>
          </Link>
          <Footer
            name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'
          />
        </Container>
    );
  }
}

export default OpeningPage;
