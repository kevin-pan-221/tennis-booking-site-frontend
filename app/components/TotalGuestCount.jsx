'use client'
import { useEffect, useState } from "react"
import classes from "./total-guest-count-styles.module.css"

function TotalGuestCount() {
    // Array of students state
    const [totalGuestCount, setTotalGuestCount] = useState(0)
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getTotalGuestCount() {
        // fetch the URL 
        // const res = await fetch("http://localhost:8080/students", {
        //    method: "GET",
        // })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        // const resJSON = await res.json()
        setTotalGuestCount(10)
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
    /* useEffect(() => {
        getAllStudents()
    }, [])
    */

    return (
        <div>
            <h2>Total Guest Count</h2>
	    <br />
            <button onClick = {getTotalGuestCount}>
                Reload
            </button>
        </div>
    )
}
export default TotalGuestCount;
