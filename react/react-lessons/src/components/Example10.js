"use client";
import {useState} from "react";
function LoginButton({onClickButton}) {
    return (
        <div>
            <button onClick = {onClickButton}>LoginButton</button>
        </div>
    );
}
function UsernameInput({value,onChangeName}){
    return(
        <div>
            <input value = {value} onChange ={(e) => onChangeName(e.target.value)}
            />
        </div>
    );
}
//Passing a function as a Props 
function Parent(){
    const [username,setUsername] =useState();
    return (
        <div>
            <UsernameInput value ={username} onChangeName={(changedName)=> setUsername(changedName)} />
            

            <LoginButton onClickButton={() => alert ("Clicked Login Button. ")}/>
        </div>
    );
}
export default Parent;