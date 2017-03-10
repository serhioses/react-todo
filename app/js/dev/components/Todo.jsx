import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, text, completed, createdAt, completedAt} = this.props,
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
                this.props.onToggle(id);
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