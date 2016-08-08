import React, {Component} from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import UserList from './UserList.jsx';
import User from './User.jsx';

var data = [
  {
    "id": 1,
    "name":"Mr Joe Bloggs",
     "tasks": [
        {"id":"00001", "task":"Wake up","complete":"false"},
        {"id":"00002", "task":"Eat breakfast","complete":"false"},
        {"id":"00003", "task":"Go to work","complete":"false"}]
  },
  {
    "id": 2,
    "name":"Sam",
     "tasks": [
         {"id":"00004", "task":"Wake up","complete":"false"},
         {"id":"00005", "task":"Eat breakfast","complete":"false"},
         {"id":"00006", "task":"Go to work","complete":"false"}]
  }

];

var App = React.createClass({
  getInitialState: function () {
    return {
      data: data,
      searchText: '',
      helpText: 'Type to search for',
      selectedUserID: 1,
    };
  },
  generateId: function () {
    return Math.floor(Math.random()*90000) + 10000;
  },
  handleNodeRemoval: function (nodeId) {
    var data = this.state.data;
    data = data.filter(function (el) {
      return el.id !== nodeId;
    });
    this.setState({data});
    return;
  },
  handleSubmit: function (task) {
    var data = this.state.data;
    var id = this.generateId().toString();
    var complete = 'false';
    data = data.concat([{id, task, complete}]);
    this.setState({data});
  },
  handleToggleComplete: function (nodeId) {
    var data = this.state.data;
    for (var i in data) {
      if (data[i].id == nodeId) {
        data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
        break;
      }
    }
    this.setState({data});
    return;
  },
  handleSelectUserID: function (userId) {
    this.setState({selectedUserID: userId });
    return;
  },
  render: function() {

    var data = this.state.data
    var user_tasks = [];
    for (var x in data) {
      if (data[x].id == this.state.selectedUserID) {
        user_tasks = data[x].tasks;
      }
    }

    return (
      <div className="well">
        <h1 className="vert-offset-top-0">Users:</h1>
        <UserList users={this.state.data}
                  selectUserID={this.handleSelectUserID} />
        <h1 className="vert-offset-top-0">To do:</h1>
        <TodoList user_tasks={user_tasks}
                  removeNode={this.handleNodeRemoval}
                  toggleComplete={this.handleToggleComplete} />
        <TodoForm onTaskSubmit={this.handleSubmit} />
      </div>
    );
  }
});

export default App;


