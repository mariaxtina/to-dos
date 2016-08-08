import React, {Component} from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import App from './App.jsx';
import User from './User.jsx';

var UserList = React.createClass({
  removeNode: function (nodeId) {
    this.props.removeNode(nodeId);
    return;
  },
  toggleComplete: function (nodeId) {
    this.props.toggleComplete(nodeId);
    return;
  },
  selectUserID: function (key) {
    this.props.selectUserID(key);
    return;
  },

  render: function() {
    console.log(this.props);
    var listNodes = this.props.users.map(function (listItem) {
      return (
        <User key={listItem.id}
              nodeId={listItem.id}
              user={listItem.name}
              complete={listItem.complete}
              toggleComplete={this.toggleComplete}
              selectUserID={this.selectUserID}/>
      );
    },this);
    return (
      <ul className="list-group">
        {listNodes}
      </ul>
    );
  }
});

export default UserList;