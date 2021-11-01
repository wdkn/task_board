import { createStore } from 'redux';

const initData = {
    data: [{ title: 'sample title', content: 'sample content', created: new Date() }],
    message: 'plese type TODO',
    mode: 'default'
};

// リスト操作管理
export function listManager(state = initData, action) {
    switch (action.type) {
        case 'CREATE':
            return (createReduce(state, action));

        case 'DELETE':
            return (deleteReduce(state, action));

        default:
            return state;
    }
}

// 作成
function createReduce(state, action) {
    let data = {
        title: action.title,
        taskType: action.taskType,
        content: action.content,
        created: new Date(),
    };
    let newdata = state.data.slice();
    newdata.unshift(data);

    return {
        data: newdata,
        message: 'Created!',
        mode: 'default'
    };
}

// 削除
function deleteReduce(state, action) {
    let newdata = state.data.slice();
    newdata.splice(action.index, 1);

    return {
        data: newdata,
        message: 'delete "' + action.index + '":',
        mode: 'delete'
    };
}

// アクション生成
export function createTodo(a_title, a_taskType, a_content) {
    return {
        type: 'CREATE',
        title: a_title,
        taskType: a_taskType,
        content: a_content,
    }
}

export function deleteTodo(num) {
    return {
        type: 'DELETE',
        index: num
    }
}

export default createStore(listManager);