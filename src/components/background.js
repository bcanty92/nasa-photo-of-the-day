import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tiles from './tiles'

// fuction to setup the data from the nasa api to link to our main js file.
function Background(){

    //setting the initial state
    const [data, setData] = useState([]);


    //initial render of the nasa api.
    //useEffect should only send a get request once unless the user reloads the page.
    useEffect(() => {
        //getting the nasa API through axios.
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=TdSBXf4bRXC7xlZuHr5sq7klviHbh6770NRwZRvQ")
        .then (res => {
            console.log(res.data);
           setData(res.data);
        });
    }, []);





    //returns jsx from my tiles js file.
    //created a Tiles tag return the tile value and passing data as the initial state.
    return(
        <div>
        <Tiles tile={data} />
        </div>

    )


}

export default Background