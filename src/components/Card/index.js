import { React } from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { IMAGE_URL } from "../../components/config";

const ImgFilm = ({ movie }) => {
  return (
    <div>
      <div className="card">
        <Link to={`/movie/${movie.title}`}>
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            style={{ width: "100%", height: "100%" }}
          />
        </Link>
      </div>
    </div>
  );
};
export default ImgFilm;
