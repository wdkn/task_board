import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TaskType.css'

class TaskType extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.data = [
      { value: "", label: "選択してください" },
      { value: "1", label: "課題" },
      { value: "2", label: "タスク" },
      { value: "3", label: "社内業務" },
      { value: "4", label: "学習" },
      { value: "5", label: "その他" },
    ];
    this.state = {
    }

    this.doTaskTypeChange = this.doTaskTypeChange.bind(this);
  }

  doTaskTypeChange(e) {
    const num = e.target.options.selectedIndex;
    const lbl = e.target.options[num].label;

    // Addコンポーネントの関数を実行
    this.props.changeValue(lbl);
  }

  render() {
    return (
      <div className="taskTypeArea">
        <span>分類：</span>
        <select className="taskType" defaultValue="" onChange={this.doTaskTypeChange} required>
          {this.data.map(d => <option value={d.value}>{d.label}</option>)}
        </select >
      </div>
    );
  }

}
TaskType.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};


export default TaskType;
// export default connect((state) => state)(TaskType);