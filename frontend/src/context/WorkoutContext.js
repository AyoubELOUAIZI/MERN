import { createContext, useReducer } from 'react'

/**
 * Create a new context object named 'WorkoutsContext' to store and share workout data throughout the application
 */
export const WorkoutsContext = createContext()

/**
 * The workouts reducer function is used to handle actions and update the state of workouts
 * @param {Object} state - The current state of workouts
 * @param {Object} action - The action to be performed
 * @returns {Object} - The updated state of workouts
 */
export const workoutsReducer = (state, action) => {
    // Check the type of action to be performed
    switch (action.type) {
        case 'SET_WORKOUTS':
            // If action is to set workouts, update the state with the payload of the action
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            // If action is to create workout, add the payload of the action to the existing workouts and update the state
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            // If action type is not matched, return the original state
            return state
    }
}

/**
 * The WorkoutsContextProvider component provides the context and state management for workouts
 * @param {Object} props - The properties of the component
 * @param {Object} props.children - The child components to be rendered within the provider
 */
export const WorkoutsContextProvider = ({ children }) => {
    // Use the useReducer hook to handle state and actions
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    // Render the provider with the state and dispatch as the value, and render the children components
    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}
