import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import { requiredInput, correctInput, matchInput } from '../../Validation';
import "./styles.css";

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            isSubmitting: false,
            isError: false
        };
    }
    submitForm = async e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            isSubmitting: true
        });
        //created a Global fetch API using Promises
        const res = await fetch("https://61m46.sse.codesandbox.io/login", {
            method: "POST",
            body: JSON.stringify(this.state.values),
            headers: {
                "Content-Type": "application/json"
            }
        });
        this.setState({ isSubmitting: false });
        const data = await res.json();
        !data.hasOwnProperty("error")
            ? this.setState({ message: data.success })
            : this.setState({ message: data.error, isError: true });

        setTimeout(
            () =>
                this.setState({
                    isError: false,
                    message: "",
                    values: { email: "", password: "" }
                }),
            1600

        );

    };

    handleInputChange = e =>
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }

        });
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="input-group">
                        <label htmlFor="first name">First Name</label>
                        <input type="text"
                            value={this.state.values.firstName}
                            onChange={this.handleInputChange}
                            title="First Name"
                            validate={[requiredInput, correctInput]}
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="last name">Last Name</label>
                        <input type="text"
                            value={this.state.values.lastName}
                            onChange={this.handleInputChange}
                            title="Last Name"
                            validate={[requiredInput, correctInput]}
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="Email"
                            value={this.state.values.email}
                            onChange={this.handleInputChange}
                            title="Email"

                            validate={[requiredInput, correctInput]}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            id="password"
                            value={this.state.values.password}
                            onChange={this.handleInputChange}
                            title="password"
                            placeholder="Password"
                            required
                            validate={[requiredInput]}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="confirm-password"
                            name="confirm-password"
                            id="confirm-password"
                            value={this.state.values.password}
                            onChange={this.handleInputChange}
                            title="confirm-password"
                            placeholder="Confirm Password"
                            required
                            validate={[requiredInput, matchInput]}
                        />
                    </div>



                    <button type="submit">Sign In</button>
                </form>
                <div className={`message ${this.state.isError && "error"}`}>
                </div>

            </div>
        );
    }




}

SignInForm = reduxForm({
    form: 'SignIn',
})(SignInForm);

export default SignInForm;