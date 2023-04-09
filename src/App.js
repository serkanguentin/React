import "./App.css";

import Navi from "./Navi";
import Category from "./Category";
import Products from "./Products";
import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    CurrentCategory: "Serkan",
  }
  ChangeCategory = category =>{
    this.setState({CurrentCategory:category.categoryName})
  }
;
  render() {
    return ( <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="2">
            <Category  CurrentCategory ={this.state.CurrentCategory} ChangeCategory={this.ChangeCategory} title="Category List" /> 
          </Col>
          <Col xs="4">
            <Products  CurrentCategory ={this.state.CurrentCategory} title="Products list" />
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
    
  
  };

}