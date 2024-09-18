'use client'
import { useState } from "react"
import classes from "./guest-form-styles.module.css";
<new></new>
function GuestForm() {
    async function onSubmit(){
        const guestBody = {
            name,
            email,
            phoneNumber,
        }
        const res = await fetch ("http://localhost:8080/guest", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(guestBody)
        })
        {/*
             CHALLENGE: Can you get the table to reload whenever you call onSubmit? 
             This may involve restructuring your project and using props!
        */}
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <div>
	    <br/> <br/>
            <h2>Guest Info</h2>
            <div className = {classes.mainForm}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                    value={name}
                    onChange = {(event) => setName(event.target.value)}
                    />
                </div> <br/>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                    value={email}
                    onChange = {(event) => setEmail(event.target.value)}
                    />
                </div> <br/>
                <div>
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input 
                    value={phoneNumber}
                    onChange = {(event) => setPhoneNumber(event.target.value)}
                    />
                </div> <br/>
            </div>
	    <div>
                <br/> <br/>
	    </div>
            <button onClick={onSubmit}>Register</button>
        </div>
    )
}
export default GuestForm
