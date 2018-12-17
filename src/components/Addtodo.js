import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo} from '../actions/Rootaction';

class Addtodo extends Component {

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    render() {
        console.log(this.props.todo)
        return (
            <div className="add-todo mb-50">
                <div className="input-group mb-3">
                    <input type="text" value={this.props.todo} className="form-control" placeholder="New Todo" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-warning" type="button" onClick={()=>this.props.addTodo(this.refs.todo.value)}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodo}, dispatch);
}

export default connect(()=> {}, mapDispatchToProps)(Addtodo);