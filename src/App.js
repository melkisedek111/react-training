import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Users from "./components/users/users";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            users: [],
            alert: false,
            alertMessage: ""
        }
    }

	/**
    * DOCUMENT: This function is used to handle the value of every input. <br>
    * Triggered: when inputting value <br>
    * Last Updated Date: October 31, 2022
    * @function
    * @memberOf App
    * @param {object} event - {}.
    * @author Mel
    */
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    /**
    * DOCUMENT: This function is used to add new user to the state uer. <br>
    * Triggered: when click the add user button with complete fields <br>
    * Last Updated Date: October 31, 2022
    * @function
    * @memberOf App
    * @param {} - {}.
    * @author Mel
    */
    handleAddUser = () => {

        /* check if the first name or last name is not empty then throw an error */
        if(!this.state.firstName || !this.state.lastName){
            this.setState({alert: true, alertMessage: "All fields are required!, please try again"});
            return;
        }

        this.setState({
            users: [...this.state.users, { firstName: this.state.firstName, lastName: this.state.lastName}],
            firstName: "",
            lastName: "",
            alert: false,
            alertMessage: ""
        })
    }
    
	render() {
		return (
			<div className="App">
				<div className="app-form">
                    { this.state.alert ? (<p className="alert">{this.state.alertMessage}</p>) : null }
					<input name="firstName" onChange={this.handleChange} value={this.state.firstName} placeholder="Please insert first name" />
					<input name="lastName" onChange={this.handleChange} value={this.state.lastName} placeholder="Please insert last name" />
                    <button onClick={this.handleAddUser}>Add User</button>
				</div>

                {/* gonna list down all the users from the users state */}
				<Users users={this.state.users}/>
			</div>
		);
	}
}

export default App;
