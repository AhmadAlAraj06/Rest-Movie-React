import { React, useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../components/config";
import axios from "axios";
import ImgFilm from "../Card";
import "./main.css";
const Main = () => {
  const [movies, setMovies] = useState([{ id: "" }]);

  useEffect(() => {
    axios.get(`${API_URL}${API_KEY}`).then((result) => {
      const _result = result.data.results;
      setMovies([..._result]);
    });
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="cards">
        {movies.map((movie) => (
          <ImgFilm key={movie.id.toString()}  movie={movie}/>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Main;
