import React from 'react'; 


const BigComponent = props => {
    const {nasaAPI} = props
//     //console.log(props);
//     const [copyright, setCopyright] = useState('')
//     useEffect( () => {
//         axios.get(`https://api.nasa.gov/planetary/apod?api_key=rnBTrhDY0lTA80dKgBcBESX5zleFVY01aYWrR7vd`)
//         .then(res => {
//           console.log(res.data.copyright);
//           setCopyright(res.data.copyright);
          
//         })
//         .catch(err => {
//           console.error(err)
//         })
//       }, []);
    
    // const { myNasa } = props
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