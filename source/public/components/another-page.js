import React from 'react';

const AnotherPage = () => {
  return (<div>This is Another Page</div>)
}

// const AnotherPageOne = React.createClass({
//   render: function() {
//     return (<div>This is Another Page</div>)
//   }
// })

module.exports = () => {
	return AnotherPage;
}