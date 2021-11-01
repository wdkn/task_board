import React, { Component } from 'react';
import { connect } from 'react-redux';
import Add from './component/Add';
import List from './component/List';
import Tick from './component/Tick';
import './App.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

// // Listの操作
// function listManager(state = state_value, action) {
//   switch (action.type) {
//     case 'Create':
//       return (
//         todolist
//       );
//   }
// }

// Listをローカルストレージに保存
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, listManager);

// let store = createStore(persistedReducer);
// let pstore = persistStore(store);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    }
  }

  render() {
    let undoneNum = 0;

    this.state.todolist.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });

    //時刻の表示
    // setInterval(tick, 1000);

    return (
      <div className="app" className="app-area">
        <Tick />
        <h1 className="title">TodoList</h1>
        <Add />
        <br />
        <hr />
        <br />
        <table><tbody><tr>
        </tr></tbody></table>
        {/* <Provider store={store}>
          <PersistGate loading={<p>loading. . .</p>} persistor={pstore}> */}
        <List />
        {/* </PersistGate>
        </Provider > */}
      </div>
    );
  }
}

export default App;
App = connect()(App);