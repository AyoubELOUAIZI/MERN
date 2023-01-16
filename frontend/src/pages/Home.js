import { useState, useEffect } from 'react';

//components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';


const Home = () => {
    // state variable to hold the data
    const [workouts, setWorkouts] = useState(null);

    // useEffect hook to fetch data from the server
    useEffect(() => {
        // function to fetch workouts data from the server
        const fetchWorkouts = async () => {
            try {
                // make a GET request to the server
                const response = await fetch('/api/workout/');
                // parse the response as JSON
                const json = await response.json();
                // update the state with the fetched data
                if (response.ok) {
                    setWorkouts(json);
                }
            } catch (error) {
                //handle any errors that occur during the fetch
                console.log(error);
            }
        }
        // call the function to fetch the data
        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    // render a div element for each item in the data
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home
