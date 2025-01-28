import React, {Component, useState} from 'react'
import Item from "./item";



export class items extends Component {

  render() {
    return (

        <main>
            {this.props.items.map(el =>(
                <Item metActorytes={this.props.metActorytes} key={el.id} item={el} onAdd={this.props.onAdd} />
            ))}
        </main>
    )
  }
}

export default items