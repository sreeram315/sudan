import React, { Component } from 'react'

class StudentForm extends Component {
  constructor (props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.state = {
      fullName: ''
    }
  }

  handleNameChange (event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    const { fullName } = this.state
    return (
      <div>
        <h1>Full name is: {fullName}</h1>
        <form method='POST'>
          <p><input type='text' placeholder='Full Name' name='fullName' onChange={this.handleNameChange} /></p>

          <button>Save</button>
        </form>
      </div>

    )
  }
}

export default StudentForm
