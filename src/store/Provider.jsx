import React, { useReducer, useMemo } from 'react';

import StoreContext from 'contexts/store';
import { bindActions } from './utils';

export default function Provider({ initialState, reducer, actions, children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const memoizedActions = useMemo(() => bindActions(actions, dispatch), [dispatch, actions]);

    const memoizedStore = useMemo(() => ({
        state,
        actions: memoizedActions
    }), [state, memoizedActions]);

    return (
        <StoreContext.Provider value={memoizedStore}>
            {children}
        </StoreContext.Provider>
    );
}