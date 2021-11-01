import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import './List.css'

class List extends Component {

  render() {
    let data;
    let n = 0;

    switch (this.props.mode) {
      case 'default':
        data = this.props.data.map((value) => (
          <Todo key={value.message} value={value} title={value.title} taskType={value.taskType} content={value.content} index={n++} />
        ));
        break;

      default:
        data = this.props.data.map((value) => (
          <Todo key={value.message} value={value} title={value.title} taskType={value.taskType} content={value.content} index={n++} />
        ));
    }

    return (
      <div className="board">
        <div className="boradName">
          <span>TasksBoard</span>
        </div>
        <div className="Todo">
          <table>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th>件名</th>
                <th>分類</th>
                <th>内容</th>
                <th>作成日</th>
                <th className="operation">操作</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody></table>
        </div>
      </div>
    );
  }
};
export default connect((state) => state)(List);