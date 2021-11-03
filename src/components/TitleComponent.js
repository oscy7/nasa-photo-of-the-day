import React, {useState, useEffect} from 'react'; 
import axios from 'axios'

const Title = props => {
    //console.log(props);
    const [title, setTitle] = useState('')
    useEffect( () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=rnBTrhDY0lTA80dKgBcBESX5zleFVY01aYWrR7vd`)
        .then(res => {
          console.log(res.data.title);
          setTitle(res.data.title);
        })
        .catch(err => {
          console.error(err)
        })
      }, []);
    
    // const { myNasa } = props
    return (
        <div>
            <p> Title : {title}  </p>
        </div>
    )
}

export default Title