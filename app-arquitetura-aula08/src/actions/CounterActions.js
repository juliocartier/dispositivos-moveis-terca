import AppDispatcher from "../dispatcher/AppDispatcher";

export const increment = () => {
    AppDispatcher.dispatch({
        actionType: 'INCREMENT'
    });
};

export const decrement = () => {
    AppDispatcher.dispatch({
        actionType: 'DECREMENT'
    });
};