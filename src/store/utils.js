export function bindActions(actions, dispatch) {
    return Object.entries(actions).reduce((result, [key, fn]) => {
        result[key] = (...args) => {
            const action = fn(...args);
            
            if (typeof action.then === 'function') {
                action.then(dispatch);
            } else if (typeof action === 'function') {
                action(dispatch);
            } else if (action.type) {
                dispatch(action);
            }

            return action;
        };

        return result;
    }, {});
}

export function combineReducers(reducers) {
    return function(state, action) {
        return Object.entries(reducers).reduce((newState, [key, reducer]) => {
            newState[key] = reducer(state[key], action);

            return newState;
        }, {});
    };
}