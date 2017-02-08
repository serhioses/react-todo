import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>Main.jsx rendered.</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}