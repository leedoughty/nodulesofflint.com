import React, { Component } from "react";
import Nodule from "../molecules/Nodule";
import styled from "styled-components";
import _ from "lodash";

const Nodules = ({onClick}) => {
  return createArray(200).map(n => <Nodule key={n} number={n} onClick={onClick} />);
}

function createArray(length) {
  return Array.from({length}, (_, i) => i + 1)
}

export default Nodules;
