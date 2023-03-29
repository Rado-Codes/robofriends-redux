import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchField = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchField}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App; 