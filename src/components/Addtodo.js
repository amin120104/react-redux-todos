import React, { Component } from 'react';
import { connect } from 'react-redux';

class Addtodo extends Component {

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() {
        // console.log(this.props.todo)
        return(
            <div className="input-group mb-3">
                <input type="text" value={this.props.todo} className="form-control" placeholder="New Todo" onChange={this.handleChange} />
                <div className="input-group-append">
                  <button className="btn btn-outline-warning" type="button" id="button-addon2">Add</button>
                </div>
            </div>
            // <h1> {this.props.todo} </h1>
        );
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos
    }
}

export default connect(mapStateToProps)(Addtodo);