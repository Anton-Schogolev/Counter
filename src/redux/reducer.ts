import {restoreState} from "../sessionStorage";

export type ErrorType = "" | "Max has to be bigger than start." | "Start has to be positive"
export type StateType = {
    min: number
    max: number
    count: number
    error: ErrorType
}

const initialState: StateType = {
    max: sessionStorage["max"] ? Number(sessionStorage["max"]) : 5,
    min: sessionStorage["min"] ? Number(sessionStorage["min"]) : 0,
    count: restoreState<number>("count", restoreState<number>("min",0)),
    error: ""
}

export const reducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET_SETTINGS": {
            sessionStorage["min"] = action.payload.min
            sessionStorage["max"] = action.payload.max
            return {...state, ...action.payload, count: action.payload.min}
        }
        case "INCREMENT": {
            sessionStorage["count"] = state.count + 1
            return {...state, count: state.count + 1}
        }
        case "RESET_COUNT": {
            sessionStorage["count"] = state.min
            return {...state, count: state.min}
        }
        case "CHECK": {
            let error: ErrorType = ""
            if (action.payload.min < 0)
                error = "Start has to be positive"
            else if (action.payload.min >= action.payload.max)
                error = "Max has to be bigger than start."
            return {...state, error: error}
        }
    }
    return state
}

export type ActionsType = ReturnType<typeof setSettingsAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof checkAC>

export const setSettingsAC = (min: number, max: number) => ({
    type: "SET_SETTINGS",
    payload: {min, max}
} as const)
export const incrementAC = () => ({
    type: "INCREMENT",
} as const)
export const resetCountAC = () => ({
    type: "RESET_COUNT"
} as const)
export const checkAC = (min: number, max: number) => ({
    type: "CHECK",
    payload: {min, max}
} as const)