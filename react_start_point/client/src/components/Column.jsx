import React from 'react'
import Square from './Square'
class Column extends React.Component{


  render(){
    return(
      <div className="column">
        <Square column={this.props.id} row="a" />
        <Square column={this.props.id} row="a" />
        <Square column={this.props.id} row="a" />
      </div>
    )
  }


}

export default Column