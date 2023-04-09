import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <h2 >{this.props.title}</h2>
        <h4>{this.props.CurrentCategory}</h4>
      </div>
      
    )
  }
}
