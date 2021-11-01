import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Todo.css'

class Todo extends Component {

    render() {
        let d = this.props.value.created;
        let year = d.getFullYear();
        let mon = ('00' + (d.getMonth() + 1)).slice(-2);
        let day = ('00' + d.getDate()).slice(-2);

        let date = year + '/' + mon + '/' + day + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

        const status = this.props.done ? '未完了' : '完了';
        const todoDelete = this.props.done ? 'クローズ' : '';

        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.title}</td>
                <td>{this.props.taskType}</td>
                <td>{this.props.content}</td>
                <td>{date}</td>
                <td className="operation">
                    <button type="button" className="statusBtn" value="編集">編集</button>
                    <span> </span>
                    <button type="button" className="statusBtn" value="編集">削除</button>
                </td>
            </tr>
        );
    }
};

export default connect()(Todo);