import React, { Component } from 'react';
import './index.css';


class ChildTwo extends Component {

    state = { childTwoState: '' }

    constructor(props) {
        super(props);
        console.log("In ChildTwo constructor.");
    }

    componentDidMount() {
        console.log("In ChildTwo DidMount.");
    }

    componentDidUpdate() {
        console.log("In ChildTwo DidUpdate.");
    }

    componentWillUnmount() {
        console.log("In ChildTwo WillUnmount.");
    }

    changesState() {
        this.setState({ childTwoState: 'changed' });
    }

    render() {
        console.log("In ChildTwo render.");
        return (
            <div>
                <h1>Hello World!</h1>
                <button onClick={() => this.changesState()} >otherTHING</button>
            </div>
        );
    }
}

export default ChildTwo;