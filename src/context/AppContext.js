import React from 'react';

export const AppContext = React.createContext();

export const iniitalState = {
    form: {
        dest: '',
        departure: '',
        deptDate: '',
        returnDate: '',
        traveler: '',
        flightClass: '',
    },
    selectedView: 'form',
    filterType: 'sort'
}

export const reducer = function (state = iniitalState, action) {

    switch (action.type) {

        case "SEARCH":
            console.log("Form Data", action.payload.form)
            return {
                ...state,
                form: action.payload.form,
                selectedView: 'result'
            }

        case "FILTER":
            return {
                ...state,
                selectedView: 'filter',
                filterType: action.payload.filterType,
            }

        case "FORM":
            return {
                ...state,
                selectedView: 'form',
            }
        default: return state;
    }

}

