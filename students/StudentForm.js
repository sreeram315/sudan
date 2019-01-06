import React, { Component } from 'react'

class StudentForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: ''
    }
    this.inputFullNameRef = React.createRef()
  }

  handleNameChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearNameField = (event) => { 
    event.preventDefault()
    this.setState({
      fullName: ''
    })
    this.inputFullNameRef.current.value = ''
  }


  focusOnName = (event) => {
    event.preventDefault()
    this.inputFullNameRef.current.focus()
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  componentDidMount () {
    // this.inputFullNameRef.current.focus()
  }

  render () {
    const { fullName } = this.state
    return (
      <div>
        <h1>Full name is: {fullName}</h1>
        <form method='POST' onSubmit={this.handleFormSubmit}>
          <p><input ref={this.inputFullNameRef} type='text' placeholder='Full Name' name='fullName' onChange={this.handleNameChange} /></p>
          <button onClick={this.focusOnName}>Focus on Name</button>
          <button onClick={this.clearNameField}>Clear name field</button>
          <button>Save</button>
        </form>
      </div>

    )
  }
}

export default StudentForm
