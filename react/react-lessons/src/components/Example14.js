"use client";
//Example :Using if statement in rendering
export default function Greeting({isLoggedIn}){
    if (isLoggedIn) return<h1>Welcome Back!</h1>
    if (isLoggedIn) return<h1>Please Log in.</h1>
    
}