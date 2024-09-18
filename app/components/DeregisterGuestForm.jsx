'use client'
import { useState } from "react"
import classes from "./guest-form-styles.module.css";
<new></new>
function DeregisterGuestForm() {
    async function onSubmit(){
        const guestInfoBody = {
            phoneNumber,
        }
        const res = await fetch ("http://localhost:8080/remove_guest", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(guestInfoBody)
        })
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <div>
	    <br/> <br/>
            <h2>Deregister A Guest</h2>
            <div className = {classes.mainForm}>
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
            <button onClick={onSubmit}>Deregister</button>
        </div>
    )
}
export default DeregisterGuestForm
