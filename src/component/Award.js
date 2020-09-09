import React from 'react'
import award from '../img/2.png'

function Award() {
    const size = {
        marginLeft:"100px",
        width:"70%",
        height:"250px",
        border:"5px solid white"
    }
    return (
        <div className="w3-card-4 w3-white" style={size} >
            <img src={award} alt="award" width="100%" height="100%" />
        </div>
    )
}

export default Award
