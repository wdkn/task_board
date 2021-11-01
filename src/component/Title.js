import React, { Component } from 'react';
// import './Title.css'

class Title extends Component {
    constructor(props) {
        super(props);
        this.doChange = this.doChange.bind(this);
    }

    doChange(e) {
        if (e.target.value.length > this.props.maxlength) {
            this.props.onCheck(e);
            e.target.value = e.target.value.substr(0, this.props.maxlength);
        }
    }

    render() {
        return (
            <input name="title" id="title" type="text" className="title-text" onBlur={this.doChange}></input>
        );
    }
}

export default Title;