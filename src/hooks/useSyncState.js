import {useState} from 'react';

function useSyncState(someState){
    const [syncState, setSyncState] = useState(someState);

    let currentState = syncState;

    const getCurrent = () => currentState;

    const setState = newValue => {
        currentState = newValue;
        setSyncState(newValue);
        return currentState;
    }

    return {getCurrent,setState}
}

export default useSyncState;

// This is a custom hook that allows you to get the current state immediately after state changes