import React from 'react';

const Singletodo = (props) => {
    return(
        <div className="single-todo mb-4 bg-white">
               <div className="d-flex align-items-center float-left">
                  <div className="tast-status">
                     <input type="checkbox" />
                  </div>
                  <div className="tast-content ml-10">
                     <h5 className="mb-0">{props.todolist}</h5>
                  </div>
               </div>
               <div className="tast-close">
                  <button type="button" className="close" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
            </div>
    );
}

export default Singletodo;