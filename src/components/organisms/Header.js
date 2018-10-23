import React, { Component } from 'react';
import styled from 'styled-components';
import Up from '../atoms/Up';
import About from '../atoms/About';

const Main = styled.header`
  font-size: 8px;
  text-decoration: none;
  left: 50%;
  font-family: "Baskerville";
  color: white;
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <Main>
        <header className="header">
            <h1 className="title">{this.props.title}</h1>
        </header>
        <Up/>
      </Main>
    )
  }
}

export default Header;
