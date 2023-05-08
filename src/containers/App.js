import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField, //this comes from reducer
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots()) //the same as dispatch(requestRobots())
    }
}


//Create component
function App( props ) {
    // const [robots, setRobots] = useState([]);
    // const [searchField, setSearchField] = useState('');
    const { searchField, onSearchChange, robots, isPending } = props;
    //Create function for event of SearchField Component
    // const onSearchField = (event) => {
    //     setSearchField(event.target.value);
    // };

    useEffect(() => {
        // console.log(store.getState());
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => setRobots(users));
        
        props.onRequestRobots();
    },[]); //when we wanna run the useEffect  in the second argument

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    //render component
    return isPending ?
        <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { setSearchField, requestRobots } from '../actions';

// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundary';

// import './App.css';

// // parameter state comes from index.js provider store state(rootReducers)
// const mapStateToProps = (state) => {
//     console.log('PROPS', state.requestRobots.robots);
//   return {
//     searchField: state.searchRobots.searchField,
//     robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending
//   }
// }

// // dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// // the function returns an object then uses connect to change the data from redecers.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRobots: () => dispatch(requestRobots())
//   }
// }

// class App extends Component {
//   componentDidMount() {
//     this.props.onRequestRobots();

//   }

//   render() {
//     const { robots, searchField, onSearchChange, isPending } = this.props;
//     // const filteredRobots = robots.filter(robot => {
//     //     return robot.name.toLowerCase().includes(searchField.toLowerCase())
//     // })

//     return (
//       <div className='tc'>
//         <h1 className='f1'>RoboFriends</h1>
//         <SearchBox searchChange={onSearchChange}/>
//         <Scroll>
//            {isPending ? <h1>Loading</h1> :
//             <ErrorBoundry>
//               <CardList robots={robots} />
//             </ErrorBoundry>
//            }
//         </Scroll>
//       </div>
//     );
//   }
// }

// // action done from mapDispatchToProps will channge state from mapStateToProps
// export default connect(mapStateToProps, mapDispatchToProps)(App)

