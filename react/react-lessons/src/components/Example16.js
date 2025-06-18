"use client";
export default function Notification({hasMessage}){
    return(
        <div>
            <h1>Dashbaord</h1>
            {hasMessage && <p>You has new Message</p>}
        </div>
    );
}