// import React, {Component} from 'react';
// import App from './App.jsx';

// var SearchBar = React.createClass({
//   handleChange: function() {
//     this.props.onUserInput(
//       this.refs.filterTextInput.value,
//       this.refs.inStockOnlyInput.checked
//     );
//   },
//   render: function() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           ref="filterTextInput"
//           onChange={this.handleChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.wasCompleted}
//             ref="inStockOnlyInput"
//             onChange={this.handleChange}
//           />
//           {' '}
//           Only show completed tasks
//         </p>
//       </form>
//     );
//   }
// });

// export default SearchBar;