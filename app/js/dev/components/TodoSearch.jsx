import React from 'react';

export default class TodoSearch extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch() {
        var showCompleted = this.refs.showCompleted.checked,
            searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }
    render() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" placeholder="Search todos" onChange={this.handleSearch} ref="searchText" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" onChange={this.handleSearch} ref="showCompleted" />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}