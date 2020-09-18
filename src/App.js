import React, { Component } from 'react';
import logo from './logo.svg';
import AutoCompleteText from './components/AutoCompleteText.js';
import './App.css';
import Home from './components/Home.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			schools: [],
      show: false,
      schoolNames: []
		};
	}

	componentDidMount() {

		fetch('http://universities.hipolabs.com/search?name=state')
			.then((resp) => resp.json())
			.then((data) => {
				this.setState({
					schools: data,
				});
			});

  }
  
  justNames = () => {
    const names =  this.state.schools.forEach(element => { names.push(element.name)
    this.setState({
      schoolNames: names
        
      });
    })
  }

	changeModal = () => {
		this.setState({ show: true });
	};

	render() {
    console.log(this.state.schools)
		return (
			<div className="App">
				<Home schools={this.state.schoolNames} changeModal={this.changeModal} show={this.state.show}></Home>
			</div>
		);
	}
}

export default App;
