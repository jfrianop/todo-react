import { useReducer, useEffect, useContext } from 'react';
import { Context } from '../store';


const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

// { type: 'SET_DATA', payload: [...] }
function reducer(state, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case UPDATE_TASK:
            return {
                ...state,
                list: state.list.map((task) => {
                    task.id === action.payload.id ? action.payload : task
                }),
            };
        case DELETE_TASK:
            return {
                ...state,
                list: state.list.filter((task) => task.id !== action.payload.id),
            };
        default:
            return state;
    }
}

const initialState = {
    list: [],
};

export function addTask(task) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {

    })
    dispatch({ type: ADD_TASK, payload: task })
    return state;
}

export function updateTask(task) {
    const [state, dispatch] = useReducer(reducer, initialState);
    dispatch({ type: UPDATE_TASK, payload: task })
    return state;
}

export function deleteTask(task) {
    const [state, dispatch] = useReducer(reducer, initialState);
    dispatch({ type: DELETE_TASK, payload: task })
    return state;
}