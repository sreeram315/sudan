import React, { Component } from 'react'

class StudentDetail extends Component {
  constructor (props) {
    super(props)
    this.NameClick = this.NameClick.bind(this)
    this.showDataToggle = this.showDataToggle.bind(this)
    this.state = {
      showDetails: true
    }
  }
  NameClick (event) {
    event.preventDefault()
    const { dataCallBack } = this.props
    dataCallBack('hello re!')
  }
  showDataToggle (event) {
    event.preventDefault()
    const { showDetails } = this.state
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
  render () {
    const { showDetails } = this.state
    const { student } = this.props
    return (
      <div>
        <h1 onClick={this.NameClick}> {student.name} </h1>
        { showDetails == true
          ? <div>
            <h4> {student.reg_no} </h4>
            <h4>  CGPA: {student.cgpa} </h4>
            <h4> {student.contact} </h4>
            <h4> {student.section} </h4>
            <h4> {student.address} </h4>
          </div>
          : '' }
        <button onClick={this.showDataToggle}>Show/hide Data</button>
      </div>

    )
  }
}

export default StudentDetail
