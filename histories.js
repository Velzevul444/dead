import React, { Component } from 'react'
import Item from "./item";

export class histories extends Component {
  render() {
    return (
      <main>
        {this.props.history_item.map(el =>(
            <histori history={el} key={el.id} onAdd={this.props.onAdd} />
        ))}

      </main>
    )
  }
}

export default histories