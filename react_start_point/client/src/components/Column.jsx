import React from 'react'
import Square from './Square'
class Column extends React.Component{

  constructor(props){
    super(props)

    // this.columnClick = this.columnClick.bind(this)
  }

  // columnClick(){
  //   console.log('What is this in the column ? This is ', this)
  // }

  render(){
    return(
      <div className="column">

        <Square column={this.props.id} row="a" player={this.props.player} switchPlayer={this.props.switchPlayer}/>

        <Square column={this.props.id} row="b" player={this.props.player} switchPlayer={this.props.switchPlayer}/>

        <Square column={this.props.id} row="c" player={this.props.player} switchPlayer={this.props.switchPlayer}/>
      </div>
    )
  }


}

export default Column