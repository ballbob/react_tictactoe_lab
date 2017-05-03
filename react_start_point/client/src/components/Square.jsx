import React from 'react'

class Square extends React.Component{

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('What is this in the square? This is ', this)
  }

  render(){
    return (
        <span className="square" onClick={this.handleClick}>
        </span>
    )
  }


}

export default Square