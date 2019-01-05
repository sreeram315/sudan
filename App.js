import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import StudentList from './students/StudentList.js'
import YoutubeVideo from './third_party/video.js'
import Markdown from './third_party/markdown.js'
// import TesterApp from './tester/Tester.js'

class App extends Component {
  render () {
    const input = '# This is a header\n\n***And this is a paragraph***'
    return (
      <div className='App'>
        <Markdown input={input} />
        <StudentList />
        <YoutubeVideo />

      </div>
    )
  }
}

export default App
