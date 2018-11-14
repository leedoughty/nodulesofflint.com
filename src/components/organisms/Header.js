import React, { Component } from 'react';
import styled from 'styled-components';
import About from '../atoms/About';
import Up from '../atoms/Up';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Main = styled.header`
  font-size: 8px;
  text-decoration: none;
  left: 50%;
  font-family: "Baskerville";
  font-weight: lighter;
  color: white;
  text-align: center;
`;

const PageHeader = styled.header`
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 3em;
`;

const TopBlock = styled.header`
  position: relative;
  width: 98vw;
  height: 100%;
  padding: 45px 1vw 35px 1vw;
`;

// create its own div for styled components to put question mark and up

class Header extends Component {
  render() {
    return (
      <PageHeader>
        <TopBlock>
          <Main>
            <About/>
              <Link style={{'textDecoration':'none', 'color':'white'}} to="/rockspage">
                {/* <h1>{this.props.title}</h1> */}
                <h1 onClick={this.props.clickFn}>{this.props.title}</h1>
              </Link>
            <Up/>
          </Main>
        </TopBlock>
      </PageHeader>
    )
  }
}

export default Header;
