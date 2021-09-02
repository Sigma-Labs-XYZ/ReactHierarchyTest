import React, { Component } from 'react';
import ChildTwo from './ChildTwo';
import './index.css';


class ChildOne extends Component {

    state = { childOneState: ''}

    constructor(props){
        super(props);
        console.log("In ChildOne constructor.");
    }

    componentDidMount(){
        console.log("In ChildOne DidMount.");
    }

    componentDidUpdate(){
        console.log("In ChildOne DidUpdate.");
    }

    componentWillUnmount(){
        console.log("In ChildOne WillUnmount.");
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        console.log("In ChildOne render.");
        return(
            <ChildTwo/>
        );
    }
}

export default ChildOne;