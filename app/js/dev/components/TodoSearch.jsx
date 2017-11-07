import React from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from 'actions';

export class TodoSearch extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch() {
        var showCompleted = this.refs.showCompleted.checked,
            searchText = this.refs.searchText.value;

        this.props.dispatch(setSearchText(searchText));
        this.props.dispatch(toggleShowCompleted(showCompleted));
    }
    render() {
        var {dispatch, showCompleted, searchText, todos} = this.props;

        function countCompletedTodos () {
            var completedTodosCount = todos ? todos.reduce((sum, current) => {
                return sum + (current.completed ? 1 : 0);
            }, 0) : 0;

            if (completedTodosCount) {
                return ` (${completedTodosCount})`;
            }

            return null;
        }

        return (
            <div className="container__header">
                <div>
                    <input type="search" value={searchText} placeholder="Search todos" onChange={() => {
                        dispatch(setSearchText(this.refs.searchText.value));
                    }} ref="searchText" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" defaultChecked={showCompleted} onChange={() => {
                            dispatch(toggleShowCompleted());
                        }} ref="showCompleted" />
                        Show completed todos{countCompletedTodos()}
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            todos: state.todos,
            searchText: state.searchText,
            showCompleted: state.showCompleted
        };
    }
)(TodoSearch);
