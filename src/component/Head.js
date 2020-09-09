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

            {/* <div className="row">
                <div className="col-1">
                    <img src={Logo} alt="logo" id="logo" style={Img}/>
                </div>
                <div className="col-10">
                    <h2 className="pt-3 pl-3 pb-0 mb-0">                
                        <b>C.R.I FLUID SYSTEM</b>
                    </h2>
                    <h5 style={tleft}>
                        Pumping trust WorldWide
                    </h5>                    
                </div>
            </div> */}

        </div>
    )
}

export default Head
