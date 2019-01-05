import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StudentList from './students/StudentList.js'
import TesterApp from './tester/Tester.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <StudentList />
      </div>
    )
  }
}

export default App
