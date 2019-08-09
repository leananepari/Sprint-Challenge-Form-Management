import React from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import MenuList from './components/MenuList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      registered: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.registered !== this.state.registered) {
      this.fetchData();
    }
  }

  fetchData = () => {
    axios.get('http://localhost:5000/api/restricted/data')
    .then(response => {
      console.log('RESPONSE', response)
      this.setState({
        menu: response.data
      })
    })
  }

  grantAccess = () => {
    this.setState({
      registered: true
    })
  }

  render() {
    return (
      <div className="App">
        <Form grantAccess={this.grantAccess}/>
        <MenuList menu={this.state.menu}/>
      </div>
    );
  }
}

export default App;
