import React, { Component } from 'react';
import styled from 'styled-components';
import { About } from '../atoms';
import { Header, Footer } from '../organisms';
import Nodule from "../molecules/Nodule";
import Modal from '../organisms/Modal';
import _ from "lodash";

import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const text = {
  'color': 'white'
}

const NodulesContainer = styled.div`
  margin-left: 1vw;
  text-align: center;
  width: 100%;
  margin-top: 7em;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 630px) {
    grid-template-columns: 1fr;
  }
  grid-column-gap: 0em;
  grid-row-gap: 3em;
`;

class RocksPage extends Component {
  state = {
    selectedImage: "",
    imageOrderArr: Array.from({length: 200}, (_, i) => i + 1)
  }

  componentDidMount() {
    this.randomiseImages();
  }

  showModal = (event) => {
    this.setState({selectedImage: event.target.src})
  }

  hideModal = (event) => {
    this.setState({selectedImage: ""})
  }

  randomiseArr = (arr) => {

  let currentIndex = arr.length;
	  let temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}
	return arr;
  }
  randomiseImages = () => {
    this.setState({imageOrderArr: this.randomiseArr(this.state.imageOrderArr)})
  }

  render() {
    return (
      <div>
        <Container>
          <Header
            clickFn={this.randomiseImages}
            title='NODULES OF FLINT'
          />
          <NodulesContainer>
            {console.log("hello")}
            {this.state.imageOrderArr.map(n => <Nodule key={n} number={n} onClick={this.showModal} />)}
          </NodulesContainer>
          <Footer
            name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'
          />
        </Container>
        <Modal image={this.state.selectedImage} onCloseClick={this.hideModal} />
      </div>
    );
  }
}

export default RocksPage;
