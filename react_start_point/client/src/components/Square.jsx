import React from 'react'

class Square extends React.Component{

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('What is this in the square? ', this)
    console.log("What is the square's row? ", this.props.row)
    console.log("What is the square's column? ", this.props.column)
  }

  render(){
    return (
        <span className="square" onClick={this.handleClick}>
        </span>
    )
  }


}

export default Square