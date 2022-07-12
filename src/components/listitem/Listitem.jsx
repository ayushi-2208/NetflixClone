import "./listitem.scss";
import { PlayArrow, ThumbUpAltOutlined, Add, ThumbDownOutlined } from '@material-ui/icons'
import { useEffect, useState } from "react";
import axios from "../../axios";

export default function Listitem({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);


  const image_base_url = "https://image.tmdb.org/t/p/original/"

  const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <div className="listItem" style={{ left: isHovered && index * 220 - 55 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={`${image_base_url}${movie.poster_path}`}  />
      {
        isHovered && (
          <>

      {/* <video src={trailer} autoPlay={true} loop/> */}

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          {/* <span>1 hour 14mins</span> */}
          <span className="limit">Popularity: {movie.popularity}</span>
          {/* <span>1999</span> */}
        </div>
        <div className="desc">
          {movie.overview}
        </div>
        <div className="genre">
          {movie.name}
        </div>
      </div>
      </>
       )
      }
    </div>
  );
}
