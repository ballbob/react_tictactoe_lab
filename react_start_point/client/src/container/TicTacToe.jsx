import React from 'react'
import Column from '../components/Column'

class TicTacToe extends React.Component{



  render(){
    return(<div className="ticTacToe">
     <Column id="1"/>
     <Column id="2"/>
     <Column id="3"/>
    </div>)
  }
}

export default TicTacToe