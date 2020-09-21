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
  
  

	changeModal = () => {
		this.setState({ show: true });
	};

	render() {

		return (
			<div className="App">
				<Home schools={this.state.schools} changeModal={this.changeModal} show={this.state.show}></Home>
			</div>
		);
	}
}

export default App;
