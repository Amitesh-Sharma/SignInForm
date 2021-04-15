import React, { Component, Fragment } from 'react';
import SignInForm from '../components/SignInForm';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="App">
                    <h1>Sign In To Your Account</h1>
                    <SignInForm />
                </div>

            </Fragment>

        );
    }
}
export default App;