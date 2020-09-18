import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super(props);
		this.schools = ['San Francisco State', 'SFSU', 'yellow'];
		this.state = {
			suggestions: [],
			text: '',
			show: false,
			name: 'Your Name',
		};
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	onTextChange = (event) => {
		const value = event.target.value;
		let suggestions = [];
		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, 'i');
			suggestions = this.schools.sort().filter((v) => regex.test(v));
		}
		this.setState(() => ({ suggestions, text: value }));
	};

	
	renderSuggestions() {
		const { suggestions } = this.state;
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul>
				{suggestions.map((school) => (
					<li onClick={() => this.suggestionSelection(school)}>{school}</li>
				))}
			</ul>
		);
	}

	suggestionSelection(value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}));
	}

	render() {
		const { text } = this.state;
		return (
			<div id="welcome">
				
				<h3>Type your name and click "Enter" below to begin!</h3>
				<input value={this.state.name} onChange={this.captureName} />
				<br></br>
				<button id="enter button">Enter</button>
				<br></br>
               

				<input value={text} onChange={this.onTextChange} />
                {this.renderSuggestions()}
            
			</div>
		);
	}
}
