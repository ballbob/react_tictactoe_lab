import React from 'react'

class Square extends React.Component{

  handleClick(){
    console.log('a square got clicked')
  }

  render(){
    return (
        <span className="square" onClick={this.handleClick}>
        </span>
    )
  }


}

export default Square