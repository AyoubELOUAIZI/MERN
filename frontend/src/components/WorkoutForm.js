import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

    // useState hook to create a state variable for the workout title and a function to update it
    const [title, setTitle] = useState('')
    // useState hook to create a state variable for the workout load and a function to update it
    const [load, setLoad] = useState('')
    // useState hook to create a state variable for the workout reps and a function to update it
    const [reps, setReps] = useState('')
    // useState hook to create a state variable for error message and a function to update it
    const [error, setError] = useState(null)

    const [emptyFields, setEmptyFields] = useState([])


    // handleSubmit function to send a POST request to server on form submission
    const handleSubmit = async (e) => {
        // prevent default form submission behavior
        e.preventDefault()
        // create an object with the workout data from the state variables
        const workout = { title, load, reps }

        // send a POST request to the server with the workout data
        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // parse the json response from the server
        const json = await response.json()

        // check if the request was unsuccessful
        if (!response.ok) {
            // if unsuccessful, update the error state with the error message
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            // if successful, clear the error message, clear the form inputs and log the response
            setEmptyFields([])
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
          //  console.log('new workout added:', json)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    return (
        // render a form with inputs for the workout data and a submit button
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}              
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}
export default WorkoutForm
