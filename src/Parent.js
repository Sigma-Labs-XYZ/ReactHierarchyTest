import React, { Component } from 'react';
import ChildOne from './ChildOne';
import './index.css';


class Parent extends Component {

    state = { parentState: '' }

    constructor(props) {
        super(props);
        console.log("In Parent constructor.");
    }

    componentDidMount() {
        console.log("In Parent DidMount.");
    }

    componentDidUpdate() {
        console.log("In Parent DidUpdate.");
    }

    componentWillUnmount() {
        console.log("In Parent WillUnmount.");
    }

    changesState() {
        this.setState({parentState: 'changed'});
    }

    render() {
        console.log("In Parent render.");
        return (
            <div>
                <ChildOne />
                <button onClick={() => this.changesState()} >THING</button>
            </div>
        );
    }
}

export default Parent;