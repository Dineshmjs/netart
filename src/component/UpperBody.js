import React from 'react'
import Left from './Left'
import Right from './Right'

function UpperBody() {
    return (
        <div className="row">
            <div className="col-4">
                <Left />
            </div>
            <div className="col-8">
                <Right />
            </div>
        </div>     
    )
}

export default UpperBody
