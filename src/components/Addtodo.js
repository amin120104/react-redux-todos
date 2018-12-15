import React, { Component } from 'react';
import { connect } from 'react-redux';

class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    render() {
        return(
            <div className="input-group mb-3">
                <input type="text" value={this.state.value} className="form-control" placeholder="New Todo" onChange={this.handleChange} />
                <div className="input-group-append">
                  <button className="btn btn-outline-warning" type="button" id="button-addon2">Add</button>
                </div>
              </div>
        );
    }
}

export default Addtodo;