import React from 'react'
import Column from '../components/Column'

class TicTacToe extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      player: "X",
      xSquares: [],
      oSquares: []
    }
    this.switchPlayer = this.switchPlayer.bind(this)
    this.findWinner = this.findWinner.bind(this)
  }

  switchPlayer(location){
    console.log('switchPlayer')
    if (this.state.player === "X"){
      this.state.xSquares.push(location)
      console.log(this.state.xSquares)
      this.setState({player: "O"})
    }else{
      this.state.oSquares.push(location)
      console.log(this.state.oSquares)
      this.setState({player: "X"})
    }
    console.log(this.state.player)
    this.findWinner()
  }

  findWinner(){
    if(
      this.state.xSquares.containsAll("1a","1b","1c") ||
      this.state.xSquares.containsAll("2a","2b","2c") ||
      this.state.xSquares.containsAll("3a","3b","3c") ||
      this.state.xSquares.containsAll("1a","2a","3a") ||
      this.state.xSquares.containsAll("1b","2b","3b") ||
      this.state.xSquares.containsAll("1c","2c","3c") ||
      this.state.xSquares.containsAll("1a","2b","3c") ||
      this.state.xSquares.containsAll("1c","2b","3a")
      ){
      return(
        alert("X wins")
        )
    }else if(
      this.state.oSquares.containsAll("1a","1b","1c") ||
      this.state.oSquares.containsAll("2a","2b","2c") ||
      this.state.oSquares.containsAll("3a","3b","3c") ||
      this.state.oSquares.containsAll("1a","2a","3a") ||
      this.state.oSquares.containsAll("1b","2b","3b") ||
      this.state.oSquares.containsAll("1c","2c","3c") ||
      this.state.oSquares.containsAll("1a","2b","3c") ||
      this.state.oSquares.containsAll("1c","2b","3a")
    ){
      return (
        alert("O Wins")
        )
    }


    //if the symbols in each square in a column match
    //if the symbols in each square in a row match
    //if a1,b2,c3 match
    //if a3,b2,c1 match
  }

  render(){
    return(
      <div className="ticTacToe">

     <Column id="1" player={this.state.player} switchPlayer={this.switchPlayer}/>

     <Column id="2" player={this.state.player} switchPlayer={this.switchPlayer}/>

     <Column id="3" player={this.state.player} switchPlayer={this.switchPlayer}/>
    </div>)
  }
}

export default TicTacToe