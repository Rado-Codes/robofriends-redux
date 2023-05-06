import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'


//Create component
function App({ store }) {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    //Create function for event of SearchField Component
    const onSearchField = (event) => {
        setSearchField(event.target.value);
    };

    useEffect(() => {
        // console.log(store.getState());
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[]); //when we wanna run the useEffect  in the second argument

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    //render component
    return !robots.length ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchField}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
    );
}

export default App;