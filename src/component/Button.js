import React, { Component } from 'react';
import { connect } from 'react-redux';

class Button extends Component {
    style = {
        fontSize: "16pt",
        padding: "5px 10px"
    }

    constructor(props) {
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        if (e.shiftKey) {
            this.props.dispatch({ type: 'DECREMENT' });
        } else {
            this.props.dispatch({ type: 'INCREMENT' });
        }
    }

    render() {
        return (
            <button style={this.style} onClick={this.doAction}>click</button>
        );
    }
}
Button = connect()(Button);
export default Button;