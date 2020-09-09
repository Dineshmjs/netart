import React from 'react'
import Left from './Left'
import Right from './Right'

function UpperBody() {
    return (
        <div className="w3-container">
            <div className="row">
                <div className="col-sm-4 col-md-4 w3-hide-small">
                    <Left />
                </div>
                <div className="col-sm-8  col-md-8 p-0">
                    <Right />
                </div>
            </div>
        </div>
    )
}

export default UpperBody
