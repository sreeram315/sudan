import React, { Component } from 'react'
// // import logo from './logo.svg'
// import './App.css'
// import StudentList from './students/StudentList.js'

import TesterData from '../data/tester_data.json'

class TesterApp extends Component {
  constructor (props) {
    super(props)
    this.toggleData = this.toggleData.bind(this)
    this.state = {
    	showData: true
    }
  }
  toggleData (event) {
    event.preventDefault()
    this.setState({
    	showData: !this.state.showData
    })
  }
  render () {
  	const { showData } = this.state
    return (

      <div>
        {TesterData.map((student, index) => {
          return (
            <div>

              {showData === true ? <h1>{student.name}</h1> : ''}
              <button onClick={this.toggleData}> Show/hide </button>

            </div>
          	)
        })}
      </div>
    )
  }
}

export default TesterApp
