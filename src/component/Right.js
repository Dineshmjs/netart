import React from 'react'
import Head from './Head'
import Award from './Award'
import UpContent from './UpContent'
import DownContent from './DownContent'

function Right() {
    return (
        <div className="p-0">            
            <Head />    
            <UpContent />        
            <Award /> 
            <DownContent />           
        </div>
    )
}

export default Right
