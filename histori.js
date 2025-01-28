import React, { Component } from 'react'

export class histori extends Component {
  render() {
    return (
      <div>{this.props.history_item.title}</div>
    )
  }
}

export default histori