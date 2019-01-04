import React, { Component } from 'react'
// // import logo from './logo.svg'
// import './App.css'
// import StudentList from './students/StudentList.js'

import TesterData from '../data/tester_data.json'

class TesterApp extends Component {
  render () {
    return (
      <div>
        {TesterData.map((student, index) => {
          return (
            <h1>{student.name}</h1>
          	)
        })}
      </div>
    )
  }
}

export default TesterApp
