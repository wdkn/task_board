import React, { Component } from 'react';
import { connect } from 'react-redux';


function mappingState(state) {
    return state;
}

class Message extends Component {
    constructor(props) {
        super(props);
    }

    style = {
        fontSize: "20pt",
        padding: "20px 5px"
    }

    render() {
        return (
            <p style={this.style}>
                {this.props.message}: {this.props.counter}
            </p>
        );
    }
}
Message = connect(mappingState)(Message);
export default Message;