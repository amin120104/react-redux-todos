import React, { Component } from 'react';
import Singletodo from './Singletodo';
import Counttodo from './Countodo';


class Showtodo extends Component {
   render() {
      return (
         <div className="show-todo">
            <Singletodo todolist='This is todo list' />
            <Singletodo todolist='This is todo list2' />
            <Counttodo />
         </div>
      );
   }
}

export default Showtodo;