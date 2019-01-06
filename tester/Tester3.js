import React, { Component } from 'react'

import Dropzone from 'react-dropzone'


const parentStyle = {
  width: 200,
  height: 200,
  border: '2px dashed #888'
}

const imgStyle = {
	margin: 20,
  width: 1100,
  height: 590,
  border: '2px dashed #888'
}

class TesterApp3 extends Component {
	constructor(props){
		super(props)
		this.state = {
			imgSrc: '',
			te: 10
		}
	}

  handleFileDrop = (files, rejectedFiles) => {
  	const file = files[0]
  	const reader = new FileReader()
  	reader.addEventListener("load", ()=>{
  		const imgresult = reader.result
  		this.setState({
  		imgSrc: imgresult
  	})
  	}, false)

  	reader.readAsDataURL(file)

  	
  }

  dropzoneChildren = () => {
  	this.props.isFocused = true
  }
  handleOnDragEnter= () => {
  	console.log("foccused")
  }

   render() {
   	const {imgSrc} = this.state
   	const {te} = this.state
    return (
    <div>
    	{imgSrc.length !== 0 
    		? 
    			<div><img style={imgStyle} src={imgSrc}/></div>
    		:
		      <Dropzone onDrop={this.handleFileDrop} accept='image/*' multiple={true} onFocus={this.handleOnDragEnter} preventDropOnDocument={false}>
		        {({getRootProps, getInputProps, isDragActive, isFocused}) => {
		          return (
		            <div {...getRootProps()}>
		              <input {...getInputProps()} />
		              {
		                  <p>Drop some files here, or click to select files to upload.</p>
		              }
		            </div>
		          )
		        }}
		      </Dropzone>
  		}
  		{imgSrc.length}
    </div>

    )
  }
}


       

        
        
      
  


//

export default TesterApp3
