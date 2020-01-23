import React from 'react';
import Form from './Form.js';
import './App.css';
class App extends React.Component {
	state = {
		user: {
			name: 'aa',
			email: '',
			password: '',
			collage: '',
			branch: ''
		},
		submitted: false
	}
	handleChnage = event => this.setState({
		user: {
			...this.state.user,
			[event.target.name]: event.target.value
		}
	})
	handleLogin = e => {
		e.preventDefault()
		this.setState({
			submitted: true
		})
	}
	render() {
		const { submitted } = this.state
		return (
			<div className="card">
				<div className="card-body">
				<form className="form-horizontal"  >
					<div className="form-group">	
							<label class="control-label col-sm-2">Name</label>
							<div className="col-sm-10">
							<input type="text" place-holder="Plz enter ur Name" className="form-control" name="name" onChange={this.handleChnage}></input>
							</div>
					</div>
					
					<div className="form-group">
							<label class="control-label col-sm-2">Email</label>
							<div className="col-sm-10">
							<input type="email" place-holder="Plz enter ur Email" name="email" className="form-control" onChange={this.handleChnage}></input>
							</div>
							
					</div>
			
					<div className="form-group">
							<label class="control-label col-sm-2">Password</label>
							<div className="col-sm-10">
							<input type="password" className="font-weight-light" className="form-control" place-holder="Plz enter ur password" name="password" onChange={this.handleChnage}></input></div>						
							
					</div>
			
					<div className="form-group">
							<label class="control-label col-sm-2">College</label>
							<div className="col-sm-10">
								<input type="text" place-holder="Plz enter ur Collage" className="form-control" name="collage" onChange={this.handleChnage}></input>
							</div>
							
					</div>
					
					<div className="form-group">
							<label class="control-label col-sm-2">Branch</label>						
							<div className="col-sm-10">
							<input type="text" place-holder="Plz enter ur Branch"className="form-control" name="branch" onChange={this.handleChnage}></input>
							</div>
					</div>
					<center><input type="submit" className="btn" value="Submit" onClick={(e) => this.handleLogin(e)} /></center>
			</form>
				{submitted && <Form
					handleLogin={() => this.handleLogin} user={this.state.user}
				/>}
				</div>
			</div>
		);
	}
}
export default App;
