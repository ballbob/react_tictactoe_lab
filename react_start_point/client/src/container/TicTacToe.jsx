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

  containsAll(squares,sq1, sq2, sq3){
    if(squares.includes(sq1) && squares.includes(sq2) && squares.includes(sq3)){
      return true
    }
    else return false
  }

  findWinner(){
    if(
      this.containsAll(this.state.xSquares,"1a","1b","1c") ||
      this.containsAll(this.state.xSquares,"2a","2b","2c") ||
      this.containsAll(this.state.xSquares,"3a","3b","3c") ||
      this.containsAll(this.state.xSquares,"1a","2a","3a") ||
      this.containsAll(this.state.xSquares,"1b","2b","3b") ||
      this.containsAll(this.state.xSquares,"1c","2c","3c") ||
      this.containsAll(this.state.xSquares,"1a","2b","3c") ||
      this.containsAll(this.state.xSquares,"1c","2b","3a")
      ){
      return(
        console.log('X wins')
        )
    }else if(
      this.containsAll(this.state.oSquares,"1a","1b","1c") ||
      this.containsAll(this.state.oSquares,"2a","2b","2c") ||
      this.containsAll(this.state.oSquares,"3a","3b","3c") ||
      this.containsAll(this.state.oSquares,"1a","2a","3a") ||
      this.containsAll(this.state.oSquares,"1b","2b","3b") ||
      this.containsAll(this.state.oSquares,"1c","2c","3c") ||
      this.containsAll(this.state.oSquares,"1a","2b","3c") ||
      this.containsAll(this.state.oSquares,"1c","2b","3a")
    ){
      return (
        console.log('O wins')
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