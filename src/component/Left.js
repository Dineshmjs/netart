import React from 'react'
import Shield from '../img/1.png'
import '../style/app.css'

function Left() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <img src={Shield} alt="shield" id="shield"></img>
            </div>           
        </div>
    )
}

export default Left
