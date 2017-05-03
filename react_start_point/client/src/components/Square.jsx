import React from 'react'

class Square extends React.Component{

  constructor(props){
    super(props)

    this.state ={
      symbol: null,
      clickable: true,
      location: this.props.column + this.props.row
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if(this.state.clickable){
      this.setState({symbol: this.props.player})
      this.setState({clickable:false})
      this.props.switchPlayer(this.state.location)

    }
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