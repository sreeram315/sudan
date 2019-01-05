import React, { Component } from 'react'
import StudentData from '../data/students_list.json'

import StudentDetail from './StudentDetail'

class StudentList extends Component {
  constructor (props) {
    super(props)
    this.handleDataCallBack = this.handleDataCallBack.bind(this)
    this.handleDeleteStudentCallBack = this.handleDeleteStudentCallBack.bind(this)
    this.state = {
      StudentsDisplayed: null
    }
  }
  handleDataCallBack (newStudent) {
    let currentStudents = this.state.StudentsDisplayed
    // currentStudents.push(newStudent)
    let newStudents = currentStudents
    this.setState({
      StudentsDisplayed: newStudents
    })
  }
  handleDeleteStudentCallBack (student) {
    let currentStudents = this.state.StudentsDisplayed

    var index = currentStudents.indexOf(student) // find the index and remove that student
    if (index > -1) { currentStudents.splice(index, 1) }

    let newStudents = currentStudents
    this.setState({
      StudentsDisplayed: newStudents
    })
  }
  componentDidMount () {
    let a = 0
    this.setState({
      StudentsDisplayed: StudentData
    })
  }
  render () {
    let { StudentsDisplayed } = this.state
    return (
      <div>
        { StudentsDisplayed !== null && StudentsDisplayed.length !== 0
          ? <div onClick={this.titleClicked}>
            <h1> Student List:  </h1>
            {StudentsDisplayed.map((item, index) => {
              return <StudentDetail
                student={item}
                key={`post-list-key ${index}`}
                dataCallBack={this.handleDataCallBack}
                deleteStudentCallBack={this.handleDeleteStudentCallBack} />
            })}
          </div>
          : <h1> No students to display </h1>}
      </div>
    )
  }
}

export default StudentList
