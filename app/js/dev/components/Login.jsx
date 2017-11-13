import React from 'react';
import * as redux from 'react-redux';

import * as actions from 'actions';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onLogin() {
        this.props.dispatch(actions.startLogin());
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="grid-container grid-x">
                    <div className="cell small-10 medium-6 large-4" style={{margin: '0 auto'}}>
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>Login with GitHub account below.</p>
                            <button className="button" type="button" onClick={() => this.onLogin()}>Login with GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default redux.connect()(Login);
