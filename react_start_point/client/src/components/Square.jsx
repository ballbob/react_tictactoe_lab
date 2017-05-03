import React from 'react'

class Square extends React.Component{

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      symbol: null
    }
  }

  handleClick(){
    console.log('What is this in the square? ', this)
    console.log("What is the square's row? ", this.props.row)
    console.log("What is the square's column? ", this.props.column)
    this.setState({symbol: "O"})
  }

  render(){
    return (
        <span className="square" onClick={this.handleClick}>
          {this.state.symbol}
        </span>
    )
  }


}

export default Square