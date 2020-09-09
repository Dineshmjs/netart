import React from 'react'
import Logo from '../asserts/logo.png'


function Head() {
    const style = {
        backgroundImage:`url(${Logo})`,
        backgroundSize: "90% 150px",    
        backgroundRepeat:"no-repeat",   
        width: "100%",
        height: "200px"
    }
    

    return (
        <div className="w3-container w3-center"  style={style} >        

        </div>
    )
}

export default Head
