import React from 'react';

export const AppContext = React.createContext();

export const iniitalState = {
    searchQuery: null,
    selectedView: 'form',
    filterType: 'sort'
}
 
export const reducer = function (state = iniitalState, action) {

    switch (action.type) {

        case "SEARCH":
            return {
                ...state,
                searchQuery: action.paylod.searchQuery,
                selectedView: 'search'
            }

        case "FILTER":
            return {
                ...state,
                selectedView: 'filter',
                filterType: action.paylod.filterType,
            }

        default: return state;
    }

}

