import React from 'react'
import Item from '../asserts/3.png'

function MiddleBody() {

    const style ={
        width:"70%",
        height:"220px",
        marginLeft:"15%"
    }
    return (
        <div>
            <p className="pt-3 pl-1">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={Item} alt="items" style={style} />
            <p className="w3-center mt-3">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>
    )
}

export default MiddleBody
