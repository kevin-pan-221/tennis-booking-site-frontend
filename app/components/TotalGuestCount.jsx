'use client'
import { useEffect, useState } from "react"
import classes from "./total-guest-count-styles.module.css"

function TotalGuestCount() {
    const [totalGuestCount, setTotalGuestCount] = useState(0)
    async function getTotalGuestCount() {
        const res = await fetch("http://localhost:8080/guest", {
            method: "GET",
        })
        const resJSON = await res.json()
        setTotalGuestCount(JSON.stringify(resJSON))
    }

    useEffect(() => {
        getTotalGuestCount()
    })

    return (
        <div>
            <h2>Total Guest Count</h2>
	    <br />
            <button onClick = {getTotalGuestCount}>
                Reload
            </button>
	    <br /> <br />
	    <h3> <font color="Magenta"> {totalGuestCount} </font> <font color="Blue"> guests so far! </font> </h3>
        </div>
    )
}
export default TotalGuestCount;