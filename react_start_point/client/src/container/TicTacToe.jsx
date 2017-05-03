import React from 'react'
import Column from '../components/Column'

class TicTacToe extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      player: "X"
    }
    this.switchPlayer = this.switchPlayer.bind(this)
  }

  switchPlayer(){
    console.log('switchPlayer')
    if (this.state.player === "X"){
      this.setState({player: "O"})
    }else{
      this.setState({player: "X"})
    }
    console.log(this.state.player)
  }


  render(){
    return(
      <div className="ticTacToe" onClick={this.switchPlayer}>

     <Column id="1" player={this.state.player}/>

     <Column id="2" player={this.state.player}/>

     <Column id="3" player={this.state.player}/>
    </div>)
  }
}

export default TicTacToe