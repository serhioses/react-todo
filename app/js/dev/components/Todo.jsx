import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var {id, text, completed, createdAt, completedAt} = this.props,
            renderDate = () => {
                return `Created ${moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')}`;
            },
            renderCompletedDate = () => {
                if (!completedAt) {
                    return null;
                }

                return <p>Completed {moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')}</p>;
            };

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
                {renderCompletedDate()}
            </div>
        );
    }
}