import React from 'react';

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>TodoApp.jsx rendered.</p>
                {this.props.children}
            </div>
        );
    }
}