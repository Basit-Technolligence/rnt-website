import React from 'react'
import './style.css'

const HomeLandingScreen=()=>{
    return(
        <>

    <div className='row'>
        <div className='col-md-6 pt-5 d-flex justify-content-center order-md-1 order-lg-1 order-2 flex-column'>
            <h1 className='my-3 main-heading'>Making energy greener, simpler and cheaper</h1>
            <h5 className='my-3 second-heading'>Cost effective renewable solutions for home and offices.</h5>
            <div className='mt-3'>
            <button type="button" class="btn">GET A QUOTE</button>
            </div>
        
        </div>
        <div className='col-md-6 pt-5 order-md-2 order-lg-2 order-1'>
            <img className='animated-img' src={require('../../Images/main.png')} style={{width:'100%',height:'100%'}} />
        </div>
    </div>

</>
    )
}

export default HomeLandingScreen