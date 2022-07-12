import { useState, useEffect } from "react";
import "./featured.scss";
import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import axios from "../../axios";


export default function Featured({type, fetchUrl}) {
    const[trending, setTrending] = useState([{
        poster_path : '',
        title : '',
        overview: ''
    }]);
    
    const image_base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setTrending(request.data.results);
            console.table(request.data);
        } fetchData();

    }, [fetchUrl])

    console.log("Image url -> " + trending.at(0).poster_path);

    return (
        <div className="featured">
            
            {/* {trending?.map((movie, index) => (
                
                <img src={`${image_base_url}${movie.poster_path}`} alt = "" />
                    
            ))} */}
            <img src={`${image_base_url}${trending.at(0).poster_path}`} alt='' />

            <div className="info">
                <span className="name">
                    {trending[0].title}
                </span>
               
                <span className="desc"> 
               
                    {trending[0].overview}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>


        </div>
    )
}
