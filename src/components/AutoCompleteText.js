import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super();
		this.schools = props.schools;
		this.state = {
			suggestions: [],
			text: '',
            name: 'Your Name',
		};
	}

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
					<li id="schoolList" onClick={() => this.suggestionSelection(school)}>{school}</li>
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
            <>
            <h3>{`Welcome to ${this.props.name}'s education page!`}</h3>
            <button onClick={() => this.props.changeModal()}>Add new education {this.renderSuggestions()} </button>
				<br></br>
				{this.props.show === true ? <input value={text} onChange={this.onTextChange} /> : null}
			<div id="welcome">
				
                <div id="sidePanel"> Education Added</div>
				
			</div>
            </>
		);
	}
}
