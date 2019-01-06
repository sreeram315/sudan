import React, { Component } from 'react'
// // import logo from './logo.svg'
// import './App.css'
// import StudentList from './students/StudentList.js'

// import TesterData from '../data/tester_data.json'

function AlertBox (props) {
  return <div className={'alert ' + props.class_name}><h1> {props.children} </h1></div>
}

export default AlertBox
