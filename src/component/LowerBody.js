import React from 'react'
import Bar from './Bar'

function LowerBody() {
    const style = {
        height: "2px",
        backgroundColor: "red"
    }
    return (
        <div className="w3-container">
            <hr style={style} />
            <p className="w3-center">
                <b>
                     C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                </b>
            </p>
            <p className="w3-center">
            CHEMICALS & PROCESS {<Bar />} POWER {<Bar />} WATER & WASTE WATER  {<Bar />} OILS & GAS {<Bar />} PHARMA {<Bar />} SUGARS & DISTILLERIES {<Bar />} PAPER & PULP {<Bar />} MARINE & DEFENCE {<Bar />} METAL & MINING {<Bar />} FOOD & BEVERAGE {<Bar />} PETROCHEMICAL & REFINERIES {<Bar />} SOLAR {<Bar />} BUILDING {<Bar />} HVAC {<Bar />} FIRE {<Bar />} FIGHTING {<Bar />} AGRICULTURE & RESIDENTIAL
            </p>
                        
        </div>
    )
}

export default LowerBody
