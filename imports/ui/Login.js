import React from "react";
import { Link } from "react-router";
import { Meteor } from 'meteor/meteor';
import { createContainer } from "meteor/react-meteor-data";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        };
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        this.props.loginWithPassword({ email }, password, (err) => {
            if (err) {
                this.setState({ error: "Unable to login. Check email and password." });
            } else {
                this.setState({ error: "" });
            }
        });
    }
    render() {
        return (
            <div className="row login-register">
                <div className="col s12 m4 login-register-box z-depth-2">
                    <h3 className="center-align">Login</h3>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)} noValidate>
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button className="btn">Login</button>
                    </form>
                    <div className="center-align">
                        <Link to="/signup" className="sublink">Need an account?</Link>
                    </div>          
                </div>

            </div>
        );

    }
}

export default createContainer(() => {
    return {
        loginWithPassword: Meteor.loginWithPassword
    };
}, Login);