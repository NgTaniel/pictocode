// import React from 'react'
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mountain from '/mountain.jpg'
import { styled } from '@mui/material';

const Pictocode = () => {
  // Styles + CSS
  const UpperContainer = styled('div')({
    backgroundColor: '#c1d4e0', 
    position: 'relative', 
    top: '-1em', 
    left: '-0.5em', 
    width: '100vw', 
    height: '40vh'
  })

  const TitleText = styled('div')({
    display: 'flex', 
    position: 'relative', 
    top: '2vw'
  })

  const TopHeader = styled('h1')({
    fontSize: '2.25vw'
  })

  const MainBody = styled('div')({
    display: 'flex'
  }) 

  const SubheadingText = styled('h1')({
    width: '800px', 
    margin: '1em 0 0 2em', 
    fontSize: '3vw', 
    zIndex: '99'
  })

  const ImageContainer = styled('div')({
    justifyContent: 'flex-end', 
    display: 'flex', 
    marginRight:'10em'
  })

  const ThumbImage = styled('img')({
    width: '37%', 
    zIndex: '99', 
    borderRadius: '50%', 
    position: 'relative', 
    boxShadow: '0px 10px 7px 3px gray'
  })

  const WaveComponent = styled('svg')({
    position: 'relative', 
    top: '-6vw', 
    left: '-0.5em', 
    width: '100vw'
  })

  const ButtonComponent = styled('button')({
    backgroundColor: '#47718E', 
    color: 'white', 
    padding: '0.7em 2em', 
    border: '1px solid #47718E', 
    borderRadius: '1em', 
    position: 'relative', 
    top: '-22vw', 
    marginLeft: '6vw', 
    fontSize: '1.5vw', 
  })

  const LowerContainer = styled('div')({
    position: 'relative', 
    marginTop: '-16.5vw' 
  })

  const LowerTitle = styled('h1')({
    fontSize: '3vw', 
    marginLeft: '2em'
  })

  const StepsBoxes = styled('div')({
    display: 'flex', 
    flex: '3', 
    margin: '1em 2em', 
    justifyContent: 'space-around', 
    textAlign: 'center'
  })

  const StepBox = styled('div')({
    backgroundColor: '#c1d4e0', 
    padding: '0.5em 2em 0', 
    width: '12em', 
    borderRadius: '20px'
  })

  const StepIcon = styled('i')({
    fontSize: '2em'
  })

  const StepHeader = styled('h1')({
    fontSize: '1.2em'
  })

  return (
    <>
      <UpperContainer id='top-layer'>
        <TitleText id='top-text'>
          <LandscapeOutlinedIcon sx={{backgroundColor: 'none', fontSize: '5.5vw', marginLeft: '1em'}}/><TopHeader>VisitNaturesThumb</TopHeader>
        </TitleText>
        <MainBody id='body-text'>
          <SubheadingText>It is a free Attraction</SubheadingText>
          <ImageContainer id='mount-image'>
            <ThumbImage src={mountain} alt='mountain'/>
          </ImageContainer>
        </MainBody>
      </UpperContainer>
      <WaveComponent viewBox="0 0 500 100">
        <path d="M 0 50 C 150 120 50 -40 500 100 L 500 0 L 0 0" fill="#c1d4e0"></path>
      </WaveComponent>
      <ButtonComponent>Follow the Guide <i className="bi bi-arrow-down-circle"/></ButtonComponent>
      <LowerContainer id='bottom-layer'>
        <LowerTitle>To get there:</LowerTitle>
        <StepsBoxes id='step-box'>
          <StepBox id='step1'>
          <StepIcon className="bi bi-1-square-fill"/><StepHeader>Flight</StepHeader>
            <p>Take a flight to Palembang</p>
          </StepBox>
          <StepBox id='step2'>
          <StepIcon className="bi bi-2-square-fill"/><StepHeader>Drive</StepHeader>
            <p>Rest before taking an Uber to the mountains</p>
          </StepBox>
          <StepBox id='step3'>
          <StepIcon className="bi bi-3-square-fill"/><StepHeader>Sightsee</StepHeader>
            <p>View the scenary and take it in</p>
          </StepBox>
        </StepsBoxes>
      </LowerContainer>
    </>
  )
}

export default Pictocode