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
      <div className="column" onClick={this.columnClick}>

        <Square column={this.props.id} row="a" player={this.props.player}/>

        <Square column={this.props.id} row="b" player={this.props.player}/>
        
        <Square column={this.props.id} row="c" player={this.props.player}/>
      </div>
    )
  }


}

export default Column