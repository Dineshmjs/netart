import React from 'react'
import Left from './Left'
import Right from './Right'

function UpperBody() {
    return (
        <div className="row">
            <div className="col-sm-4 w3-hide-small">
                <Left />
            </div>
            <div className="col-sm-8  p-0">
                <Right />
            </div>
        </div>
    )
}

export default UpperBody
