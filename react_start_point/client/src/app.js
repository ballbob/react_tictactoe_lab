import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './container/TicTacToe'
import Rules from './models/Rules'

window.onload = function(){
  ReactDOM.render(
    <TicTacToe />,
    document.getElementById('app')
  );
}
