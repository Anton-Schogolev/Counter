import {ErrorType, StateType} from "./reducer";

export const maxSelector = (state: StateType): number => state.max
export const minSelector = (state: StateType): number => state.min
export const countSelector = (state: StateType): number => state.count
export const errorSelector = (state: StateType): ErrorType => state.error