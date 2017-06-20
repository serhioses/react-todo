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
        var {dispatch, showCompleted, searchText} = this.props;

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
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            searchText: state.searchText,
            showCompleted: state.showCompleted
        };
    }
)(TodoSearch);
