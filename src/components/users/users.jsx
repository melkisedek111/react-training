import React, { Component } from "react";

class Users extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this?.props?.users?.length
					? this.props.users.map((user, index) => (
							<div key={index}>
								<p>ID: {index + 1}</p>
								<p>First Name: {user.firstName}</p>
								<p>Last Name: {user.lastName}</p>
							</div>
					  ))
					: null}
			</div>
		);
	}
}

export default Users;
