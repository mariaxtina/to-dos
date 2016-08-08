import React, {Component} from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import App from './App.jsx';

var TodoList = React.createClass({
  removeNode: function (nodeId) {
    this.props.removeNode(nodeId);
    return;
  },
  toggleComplete: function (nodeId) {
    this.props.toggleComplete(nodeId);
    return;
  },
  render: function() {
    console.log(this.props.user_tasks)
    var listNodes = this.props.user_tasks.map(function (listItem) {
      console.log("listitem", listItem)
      return (
        <TodoItem key={listItem.id}
                  nodeId={listItem.id}
                  task={listItem.task}
                  complete={listItem.complete}
                  removeNode={this.removeNode}
                  toggleComplete={this.toggleComplete} />
      );
    },this);
    return (
      <ul className="list-group">
        {listNodes}
      </ul>
    );
  }
});

export default TodoList;