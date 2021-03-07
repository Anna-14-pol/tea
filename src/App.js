import React from 'react';
import './App.css';
import CheckboxListSecondary from './components/PostList';
import Search from './components/Search';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText:''
    }
  }

  filterUpdate(value){
    this.setState({
      filterText:value
    })
  }

render() {

  return (
    <div className="App">
      <Search 
      filterText={this.state.filterText}
      filterUpdate={this.filterUpdate.bind(this)}
      />
      <CheckboxListSecondary
      filterText={this.state.filterText}
      />
    </div>
  );
  }
};

export default App;
