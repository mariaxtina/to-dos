import React, {Component} from 'react';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import App from './App.jsx';

var User = React.createClass({
  removeNode: function (e) {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
    return;
  },
  toggleComplete: function (e) {
    e.preventDefault();
    this.props.toggleComplete(this.props.nodeId);
    return;
  },
  updateClass: function () {

  },
  render: function() {
    var classes = 'list-group-item clearfix';
    if (this.props.complete === 'true') {
      classes = classes + ' list-group-item-success';
    }
    return (
      <li className={classes}>
        {this.props.user}
        <div className="pull-right" role="group">
        <button type="button" className="btn btn-xs btn-success img-circle" onClick={this.toggleComplete}>&#x2713;</button>
      </div>
      </li>
    );
  }
});

export default User;