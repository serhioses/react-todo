import React from 'react';
import {connect} from 'react-redux';

import {startAddTodo} from 'actions';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        var title = this.refs.title.value;

        e.preventDefault();

        if (title.length) {
            this.refs.title.value = '';
            // this.props.onAddTodo(title);
            this.props.dispatch(startAddTodo(title));
        } else {
            this.refs.title.focus();
        }
    }
    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="What do you need to do?" ref="title"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);