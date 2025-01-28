import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'all',
        },
        {
          key: 'childrens',
          name: 'childrens',
        },
        {
          key: 'panks',
          name: 'panks',
        },
        {
          key: 'furi',
          name: 'furi',
        }
      ],
    }
  }
  render() {
    return (
      <div className='categories'>
        {
          this.state.categories.map(el => (
              <div key={el.key} onClick={()=> this.props.chooseCategories(el.key)}>{el.name}</div>
          ))
        }
      </div>
    )
  }
}

export default Categories
