"use client";
import React,{useState} from "react";
export default function Person(){
    const[name,setName] =useState("mg mg");
    const[email,setEmail] =useState("mkm@gmail.com");
    const[phoneNo,setPhoneNo] =useState("09786533015");

    const onChangeEmail =(changedEmail) =>{
        setEmail(changedEmail);
    };

    const onChangePhoneNo =(event)=>{
        console.log('onchangedPhoneNo',event)
        setPhoneNo(event.target.value);
    };

    const onClickButton = () => {
        alert("Butten 1 clicked!");
    };

    const onClickButton2 = () => {
        alert("Butten 2 clicked!");
    };

    return(
        <div>
            <h1>Event in Functional Component</h1>
            <input
            value={name}
            placeholder="Enter Name"
            onChange ={(event) => setName(event.target.value)}
            />

            <input
             value={email}
             placeholder="Enter Email"
             onChange ={(event) => onChangeEmail(event.target.value)}
             />

            <input
            value ={phoneNo}
            placeholder ="Enter Phone No."
            onChange ={onChangePhoneNo}
            />

            <button onClick ={onClickButton}>Butten 1</button>
            <button onClick ={() => onClickButton2()}>Butten 2</button>
        </div>
    );
}