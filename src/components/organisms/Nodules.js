import React, { Component } from "react";
import Nodule from "../molecules/Nodule";
import styled from "styled-components";
import _ from "lodash";

const Nodules = ({onClick}) => {
  console.log("createArray");
  return createArray(200).map(n => <Nodule key={n} number={n} onClick={onClick} />);
}

function createArray(length) {
  const collection = [...new Array(length)].map((_, i) => i + 1);
  console.log(collection);
  return _.shuffle(collection);
}

export default Nodules;
