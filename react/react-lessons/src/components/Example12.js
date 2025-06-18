"use client"
//Global Style
const h1Style ={color : "red",backgroundColor:"white",padding :10};
//Example style in react
export default function UserProfile(){
    return(
        <div>
            <h1 style ={h1Style}>User Profile</h1>
            <h1 style ={h1Style}>User Profile 2</h1>
            <p style ={{color:"blue",fontSize:20,padding:10}}>
                Name: Mg Mg
                </p>
        </div>
    );
}