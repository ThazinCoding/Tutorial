"use client"; // This directive is correct for Next.js 13+ client components

import { useState } from "react"; // Correct import for useState hook

function LoginButton({ onClickButton }) {
    return (
        <div>
            <button onClick={onClickButton}>LoginButton</button>
        </div>
    );
}

function UsernameInput({ value, onChangeName }) {
    return (
        <div>
            <input
                type="text" // Good practice to specify type
                value={value}
                onChange={(e) => onChangeName(e.target.value)} // <<<--- CORRECTED LINE HERE
                placeholder="Enter name"
            />
           
        </div>
    );
}

// Passing a function as a Props
function Parent() {
    const [username, setUsername] = useState(""); // Initialize state with an empty string for input fields

    return (
        <div>
            <UsernameInput value={username} onChangeName={(changeName) => setUsername(changeName)} />

            {/* You could also show the username here in the parent for clarity */}
            <p> {username}</p>

            <LoginButton onClickButton={() => alert(`Clicked Login Button. Username: ${username}`)} />
           
        </div>
    );
}

export default Parent;