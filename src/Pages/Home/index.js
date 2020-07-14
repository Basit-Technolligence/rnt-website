import React from 'react'
import './style.css'
import HomeLandingScreen from '../../Components/HomeLandingScreen'
import Navbar from '../../Components/Navbar'


const Home=()=>{
    return(
        <>
        <div className='container-fluid '>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <Navbar />
                    </div>
                </div>
                <div className='row'>
<div className='col-md-10 mx-auto'>
            <HomeLandingScreen />
            </div>
</div>
            </div>
        </>
    )
}

export default Home