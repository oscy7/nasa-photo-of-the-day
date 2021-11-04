import React from 'react'; 
import styled from 'styled-components';

const StyledComp = styled.div`
  
    img {
        border-radius: 50%;
        max-width: 800px;
        max-height: 500px; 
        display:flex;
        justify-content: space-between;
        margin-left:auto;
        margin-right: auto;
    }
`
const NasaH1 = styled.h1`
    font-family: 'Source Sans Pro', sans-serif; 
    font-size: 45px;         
    font-style: normal; 
    font-variant: normal; 
    font-weight: 700; 
    line-height: 15px;
    color: #105bd8;
    padding-bottom: 2px; 
    display:flex; 
    justify-content: center;
    margin-left:auto;
    margin-right: auto;
    
`

const NasaButton = styled.button`
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #105bd8;
    border: none;
    padding: 15px 10px;
    text-align:center;
    text-decoration:none;
    display:inline-block;
    font-size: 16px;
    color: white;
    cursor: pointer;
    border-radius: 12px;
    margin: 10px;

`
const NasaCopy = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    color: #105bd8;
`
const NasaDate= styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    color: #105bd8;
`
const NasaExplain = styled.p`
    color: #105bd8;
    text-align:center;
    font-size: 15px;
    border-color: grey;
    border-style:solid;
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: 'Source Sans Pro', sans-serif;

`




const BigComponent = props => {
    const {nasaAPI} = props
    return (
        <StyledComp>
            <NasaH1>
                Nasa Photo of the Day!!
            </NasaH1>
            <NasaButton>
                Tickets to Mars
            </NasaButton>
            <NasaButton>
                Tickets to Titan
            </NasaButton>
            <NasaButton>
                Tickets to the Moon
            </NasaButton>
            <NasaCopy> 
                Copyright : {nasaAPI.copyright}
            </NasaCopy>                                
            <NasaDate> Date : {nasaAPI.date}  </NasaDate>
            <div>
                <img src = {nasaAPI.hdurl} alt="NASA POTD"/>
            </div>
            <div>
                <p>Explanation:</p>
            </div>
            <NasaExplain> 
                {nasaAPI.explanation}
            </NasaExplain>
        </StyledComp>
    )
}

export default BigComponent