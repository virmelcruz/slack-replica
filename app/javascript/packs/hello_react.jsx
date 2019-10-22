// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class DependentForm extends Component {
  handleSubmit(evt, { name }) {
    evt.preventDefault()
  const { onSubmit } = this.props
    onSubmit({ name: name.value })
    name.value = ""
  }
  render() {
    let reference
    return (
      <form onSubmit={ (evt) => this.handleSubmit(evt, {name: reference} )}>
        <label htmlFor="son_name">
          Pangalan ng Anak ni Chard
        </label>
        <input 
          type="text" 
          id="son_name" 
          ref={ (element) => { reference = element } }/>
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }
}
class Son extends Component {
  render() {
    const { name } = this.props
    return (
      <ul>
        <li> { name } </li>
      </ul>
    )
  }
}
class Chard extends Component {
  constructor() {
    super()
    this.acceptSon = this.acceptSon.bind(this)
    this.state = { sons: 
      [
        { name: "Ly" },
        { name: "Jayah" },
        { name: "Kuya Joebert" },
        { name: "Oni boy" }
      ]
    };
  }
  acceptSon(params) {
    const { sons } = this.state
    this.setState({ sons: sons.concat(params) })
  }
  renderSons() {
    const { sons } = this.state
    return (
      sons.map( (son, index) => {
        return (
          <Son 
            key={ index }
            name={ son.name }
          />
        )
      })
    )
  }
  
  render() {
    const { messageComponent, active } = this.props
    return (
      <div>
        { this.renderSons() }
        <DependentForm
          onSubmit={ this.acceptSon } />
      </div>
    )    
  }
}

const Hello = props => {
  return (
    <div>
      <Chard />
      Hello {props.name}!
    </div>  
  )
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('div')),
  )
})
