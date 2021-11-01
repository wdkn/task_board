import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Add.css'
import { createTodo } from './Store';
import TaskType from './TaskType';

class Add extends Component {

    // static contextType = TestContext;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            taskType: '',
            content: '',
            created: '',
        }
        this.doAction = this.doAction.bind(this);
        this.doCheck = this.doCheck.bind(this);
        this.doTitleChange = this.doTitleChange.bind(this);
        this.doContentChange = this.doContentChange.bind(this);
    }

    doAction(e) {
        e.preventDefault();
        let action = createTodo(this.state.title, this.state.taskType, this.state.content);
        this.props.dispatch(action);
        this.setState({
            title: '',
            content: '',
            created: '',
        });
    }

    // 分類コンポーネントに関数を渡して更新
    changeValue(value) {
        this.setState({ taskType: value });
    }

    doTitleChange(e) {
        this.setState({
            title: e.target.value,
        });
    }
    doContentChange(e) {
        this.setState({
            content: e.target.value,
        });
    }

    cnlBtnClick() {
        document.getElementById("content").value = "";
        document.getElementById("title").value = "";
    }

    doCheck(event) {
        alert("件名が長すぎます（最大10文字）")
    }

    render() {
        return (
            <div className="form">
                <form name="todoform" onSubmit={this.doAction}>
                    <div className="todo">
                        <div className="input-area">
                            {/* <table className="input-table">
                                <tr>
                                    <td><label className="itemHead">件名 </label></td>
                                    <td className="td"><input name="title" type="text" className="title-text" /></td>
                                </tr>
                                <tr>
                                    <td><label className="itemHead">内容 </label></td>
                                    <td className="td"><textarea name="content" className="content-text" rows="4" ></textarea></td>
                                </tr>
                            </table> */}
                            <div className="input-inline-area">
                                <label className="itemHead">件名：</label>
                                <input name="title" id="title" type="text" className="title-text" onChange={this.doTitleChange} value={this.state.title} required />
                                <TaskType value={this.state.taskType} changeValue={this.changeValue.bind(this)} />
                                <label className="itemHead">内容：</label>
                                {/* <textarea name="content" id="content" className="content-text" rows="4" onChange={this.doContentChange} value={this.state.content} required ></textarea> */}
                                <input name="content" id="content" type="text" className="content-text" rows="4" onChange={this.doContentChange} value={this.state.content} required ></input>
                            </div>
                        </div>
                        <div className="button-area">

                            <button type="submit" className="btn btn--orange btn--cubic btn--shadow">作成</button>
                            <input type="button" id="cnlBtn" className="btn btn--gray btn--cubic btn--shadow" value="キャンセル" onClick={this.cnlBtnClick.bind(this)}></input>

                        </div>

                    </div>
                </form>
            </div>
        );
    }
};

export default connect((state) => state)(Add);