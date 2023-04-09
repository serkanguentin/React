import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  state = {
    categories: [
      { categoryId: "1", categoryName: "Beverages" },
      { categoryId: "2", categoryName: "Condiments" },
    ],

  };

  render() {
    return (
      <div>
        <h2 class="text-info">{this.props.title}</h2>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem 
            onClick={()=>this.props.ChangeCategory(category)}
            key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.CurrentCategory}</h4>
      </div>
    );
  }
}
