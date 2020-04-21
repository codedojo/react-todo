import { useContext } from 'react';

import StoreContext from '../contexts/store';

export default function useStore() {
    const { state, actions } = useContext(StoreContext);

    return {
        state,
        actions
    };
}