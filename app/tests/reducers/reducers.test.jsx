import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('Reducers', () => {
    describe('Search text reducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            },
                response = reducers.searchTextReducer(df(''), df(action));

            expect(response).toEqual(action.searchText);
        });
    });
    describe('Show completed reducer', () => {
        it('should flip showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            },
                response = reducers.showCompletedReducer(df(true), df(action));

            expect(response).toBe(false);
        });
    });
});