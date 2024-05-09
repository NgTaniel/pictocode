// import React from 'react'
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import mountain from '../public/mountain.jpg'

const Pictocode = () => {
  return (
    <>
      <div id='top-layer' style={{backgroundColor: '#c1d4e0', position: 'relative', top: '-1em', left: '-0.5em', width: '100vw', height: '40vh'}}>
        <div id='top-text' style={{display: 'flex', position: 'relative', top: '2vw'}}>
          <LandscapeOutlinedIcon sx={{backgroundColor: 'none', fontSize: '5.5em', marginLeft: '1em'}}/><h1 style={{fontSize: '2.25em'}}>VisitNaturesThumb</h1>
        </div>
        <div id='body-text' style={{display: 'flex'}}>
          <h1 style={{width: '260px', margin: '1em 0 0 2em', fontSize: '3vw'}}>It is a free Attraction</h1>
          <div id='mount-image' style={{justifyContent: 'flex-end', display: 'flex', marginRight:'10em'}}>
            <img style={{width: '37%', zIndex: '99', borderRadius: '50%', position: 'relative', boxShadow: '0px 10px 7px 3px gray'}} src={mountain} alt='mountain'/>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 500 100" style={{position: 'relative', top: '-5vw', left: '-0.5em', width: '100vw'}}>
        <path d="M 0 50 C 150 120 50 -40 500 100 L 500 0 L 0 0" fill="#c1d4e0"></path>
      </svg>
        <button style={{backgroundColor: 'white', padding: '2em', border: '3px solid white', borderRadius: '1em', position: 'relative', top: '-22vw', marginLeft: '6vw'}}>Follow the Guide</button>
      <div id='bottom-layer' style={{marginTop: '-13vw' }}>
        <h1 style={{fontSize: '2.25em', marginLeft: '2em'}}>To get there:</h1>
        <div id='step-box' style={{display: 'flex', flex: '3', margin: '1em 2em', justifyContent: 'space-around'}}>
          <div id='step1'>
            <h1>Flight</h1>
          </div>
          <div id='step2'>
            <h1>Drive</h1>
          </div>
          <div id='step3'>
            <h1>Sightsee</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pictocode