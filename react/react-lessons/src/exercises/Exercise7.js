"use client";
import React from "react";
export default class Animal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "Milky",
            date: new Date,
            year: "three years",
        };
        
    }
    render(){
        return(
            
            <div>
                <h1>State in Class Component</h1>
                <div>{this.state.name}</div>
                <div>{this.state.year}</div>
                <div>{this.state.date.toString()}</div>
            </div>
           
        );
    }
}