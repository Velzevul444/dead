import React, { Component } from 'react'

export class item extends Component  {

  render() {
    return (
        <div className={'item'}>
            <img src = {"./images/" + this.props.item.img} onClick={() => this.props.metActorytes()}/>
            <h2>{this.props.item.title}</h2>
            <h1>{this.props.item.categories}</h1>
            <h3>{this.props.item.time}</h3>

            <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>actors</div>
        </div>
    )
  }
}

export default item