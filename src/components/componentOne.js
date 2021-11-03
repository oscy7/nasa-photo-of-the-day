import React from 'react'; 


const BigComponent = props => {
    const {nasaAPI} = props
    return (
        <div>
            <p> Copyright : {nasaAPI.copyright}  </p>
            <p> Date : {nasaAPI.date}  </p>
            {/* <p> Image : {nasaAPI.image}  </p> */}
            <p> Explanation: {nasaAPI.explanation}  </p>
            <img src = {nasaAPI.hdurl}></img>
        </div>
    )
}

export default BigComponent