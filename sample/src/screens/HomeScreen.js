import React, {useState,useEffect} from 'react'
import playground from '../assets/PLAYIsland4.png';
import './homeStyles.css'

function HomeScreen() {

    const [isMobile,setIsMobile]=useState(false)
    useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false)
    }
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });
    return (
        <>
        { isMobile && (
            <div>
            Mobile Mode Activated
            </div>
            )}
        
        <div className="body-wrap">
        <div className="title">
          <h1>Stay Wavy</h1>
          <h1>My Friend</h1>
        </div>
      <div className="highstreet-logo"></div>
        <div className="row">
          <div className="col-md-4 col-sm-12 align-self-start">
          </div>
          <div className="col-md-8 col-sm-12 align-self-end">
            <div className="playground-wrap">
              <img src={playground} className="box playground img-fluid" width="" alt="playground"/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default HomeScreen
