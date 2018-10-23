import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.header`
  font-size: 8px;
  text-decoration: none;
  left: 50%;
  font-family: "Baskerville";
  color: white;
`;

class Header extends Component {
  render() {
    return (
      <Main>
        <header className="header">
            <h1 className="title">{this.props.title}</h1>
        </header>
      </Main>
    )
  }
}

export default Header;
