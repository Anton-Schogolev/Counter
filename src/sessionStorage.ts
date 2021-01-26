export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    sessionStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = sessionStorage.getItem(key);
    if (stateAsString !== null)
        defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}