import React, {useEffect} from 'react'
import Header from '../../Containers/Header'


export default  ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return(
        <>
            <Header />
            <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <strong>Comming soon</strong>
          </div>
        </div>
      </div>
        </>
    )
}