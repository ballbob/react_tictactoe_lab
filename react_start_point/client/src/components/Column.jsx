import React from 'react'
import Square from './Square'
class Column extends React.Component{

render(){
  return(
    <div className="column">
      <Square />
      <Square />
      <Square />
    </div>
  )
}


}

export default Column