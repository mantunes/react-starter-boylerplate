import React from 'react';
import Input from './Input';
import List from './List';

class NameListApp extends React.Component {

  addName = (event) => {
    let elem = event.target.firstChild;
    this.props.addName(elem.value);
    elem.value = "";
    event.preventDefault();
  };

  removeName = (i) => {
    this.props.removeName(i);
  };

  render(){
    return (
      <div>
        <h3>Redux Example</h3>
          <List names={this.props.names} onRemove={this.removeName}/>
        <Input onSubmit={this.addName} />
      </div>
    );
  }
}

export default NameListApp;