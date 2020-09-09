import React from 'react'
import Logo from '../asserts/logo.png'


function Head() {
    const style = {
        width: "45%",
        height: "100px"
    }

    return (
        <div className="w3-container w3-center"  style={style} >
            <img src={Logo} alt="Logo" width="100%" height="100%" />

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
