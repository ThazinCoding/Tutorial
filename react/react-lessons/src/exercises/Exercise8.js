"use client";

import React,{useState} from "react";

export default function Animal(){
    const [name,setName]=useState("Milky");
    const [year,setYear]=useState("Three years");
    const [date,setDate]=useState(new Date());
    return(
        <div>
            <h1>State in Functional Component</h1>
            <div>{name}</div>
            <div>{year}</div>
            <div>{date.toString()}</div>
        </div>
    );
}