import React, { Component } from 'react'
import StudentData from '../data/students_list.json'

import StudentDetail from './StudentDetail'

class StudentList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallBack = this.handleDataCallBack.bind(this)
  }
  handleDataCallBack (text_message) {
    alert(text_message)
  }
  render () {
    return (
      <div onClick={this.titleClicked}>
        <h1> Student List:  </h1>
        {StudentData.map((item, index) => {
          return <StudentDetail
            student={item}
            key={`post-list-key ${index}`}
            dataCallBack={this.handleDataCallBack} />
        })}
      </div>
    )
  }
}

export default StudentList
