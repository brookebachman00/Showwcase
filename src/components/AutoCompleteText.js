import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props) {
		super(props);
		this.schools = ["San Francisco State", "SFSU"]
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
			<div id="welcome"> { this.state.name !== "Your name" ? 
                <h3>{`Welcome to ${this.props.name}'s education page!`}</h3> : null}

                <button onClick={()=> this.props.changeModal()} >Add new education  {this.renderSuggestions()} </button><br></br>
                {
                this.props.show === true ? <input value={text} onChange={this.onTextChange}
               />
               : null 
                } 
                
                
				
               
{/* 
				<input value={text} onChange={this.onTextChange} />
                {this.renderSuggestions()} */}
            
			</div>
		);
	}
}
