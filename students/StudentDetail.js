import React, { Component } from 'react'

class StudentDetail extends Component {
  constructor (props) {
    super(props)
    this.NameClick = this.NameClick.bind(this)
  }
  NameClick (event) {
    event.preventDefault()
    const { dataCallBack } = this.props
    dataCallBack('hello re!')
  }
  render () {
    const { student } = this.props
    return (
      <div>
        <h1 onClick={this.NameClick}> {student.name} </h1>
        <h4> {student.reg_no} </h4>
        <h4>  CGPA: {student.cgpa} </h4>
        <h4> {student.contact} </h4>
        <h4> {student.section} </h4>
        <h4> {student.address} </h4>
      </div>

    )
  }
}

export default StudentDetail
