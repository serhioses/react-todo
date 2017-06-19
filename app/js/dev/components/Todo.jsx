import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import * as actions from 'actions';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props,
            todoClassName = completed ? 'todo todo-completed' : 'todo',
            renderDate = () => {
                return `Created ${moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')}`;
            },
            renderCompletedDate = () => {
                if (!completedAt) {
                    return null;
                }

                return <p className="todo__subtext">Completed {moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')}</p>;
            };

        return (
            <div className={todoClassName} onClick={() => {
                // this.props.onToggle(id);
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                    {renderCompletedDate()}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {

        };
    }
)(Todo);