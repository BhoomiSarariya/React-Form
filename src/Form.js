import React from 'react';
import './App.css';
class Form extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {name,email,password,collage,branch} =this.props.user
		console.log("Form1", this.props.user)	
		return (
			<div>
				<p>{name}</p>
				<p>{email}</p>
				<p>{password}</p>
				<p>{collage}</p>
				<p>{branch}</p>
			</div>
		);
	}
}	
export default Form;