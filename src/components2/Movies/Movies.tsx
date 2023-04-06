import Header from "./MoviesHeader/Header";
import Movie from "./Movie/Movie";

import styles from "./Movies.module.css";
import React, { useEffect } from "react";
import { useState } from "react";

const iteration = [1, 2, 3, 4, 5, 6, 7, 8];

const moviesData = [
  {
    name: "Antman",
    genre: ["Action", "Sports", "Horror"],
    language: ["English", "Hindi", "Gujarati", "French"],
    format: ["2D"],
    src: "/assets/Frame/antman.png",
  },
  {
    name: "Avatar",
    genre: ["Horror"],
    language: ["English"],
    format: ["2D", "3D", "4D"],
    src: "/assets/Frame/Avatar.png",
  },
  {
    name: "Congratulation",
    genre: ["Sports", "Comedy", "Horror"],
    language: ["English", "Hindi"],
    format: ["2D", "5D"],
    src: "/assets/Frame/congratulation.png",
  },
  {
    name: "Gandhigodse",
    genre: ["Action", "Romance", "Comedy"],
    language: ["Hindi", "Gujarati"],
    format: ["3D", "4D", "5D"],
    src: "/assets/Frame/gandhigodse.png",
  },
  {
    name: "Love",
    genre: ["Thriller", "Sports", "Comedy", "Sci-Fi"],
    language: ["English", "Gujarati"],
    format: ["5D"],
    src: "/assets/Frame/love.png",
  },
  {
    name: "Pathan",
    genre: ["Action", "Romance"],
    language: ["English", "Hindi"],
    format: ["2D", "3D", "5D"],
    src: "/assets/Frame/Pathan.png",
  },
  {
    name: " shezada",
    genre: ["Sports", "Comedy", "Sci-Fi", "Horror"],
    language: ["Hindi", "Gujarati"],
    format: ["2D", "3D", "4D", "5D"],
    src: "/assets/Frame/shezada.png",
  },
  {
    name: "Titanic",
    genre: ["Sports", "Comedy"],
    language: ["English", "Hindi", "Gujarati"],
    format: ["2D", "5D"],
    src: "/assets/Frame/Titanic.png",
  },
  {
    name: "Vash",
    genre: ["Sci-Fi", "Horror", "Comedy"],
    language: ["English"],
    format: ["3D", "4D", "5D"],
    src: "/assets/Frame/vash.png",
  },
  {
    name: "Dabangg 3",
    genre: ["Romance", "Thriller", "Sports", "Comedy", "Sci-Fi", "Horror"],
    language: ["English", "Hindi"],
    format: ["2D"],
  },
  {
    name: "Salt Bridge",
    genre: ["Action", "Romance", "Comedy", "Sci-Fi", "Horror"],
    language: ["Hindi", "Gujarati"],
    format: ["2D", "3D", "5D"],
  },
  {
    name: "Cabaret",
    genre: ["Action", "Romance", "Thriller", "Sports", "Comedy", "Sci-Fi"],
    language: ["Gujarati"],
    format: ["2D", "3D", "5D"],
  },
  {
    name: "Uri: The Surgical Strike",
    genre: ["Action", "Romance", "Thriller", "Horror"],
    language: ["English", "Gujarati"],
    format: ["5D"],
  },
  {
    name: "Battalion 609",
    genre: ["Thriller", "Sports", "Comedy", "Sci-Fi", "Horror"],
    language: ["Hindi", "Gujarati"],
    format: ["3D", "4D", "5D"],
  },
  {
    name: "Evening Shadows",
    genre: [
      "Action",
      "Romance",
      "Thriller",
      "Sports",
      "Comedy",
      "Sci-Fi",
      "Horror",
    ],
    language: ["English", "Hindi"],
    format: ["2D", "3D"],
  },
];

const Movies = () => {
  const [genre, setGenre] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [apiMoviesData, setapiMoviesData] = useState([]);
  // const[filterData,setFilterData]=useState([]);

  const MovieHandler = (gen: any, format: any, lan: any) => {
    setGenre(gen);
    setFormat(format);
    setLanguage(lan);
  };
  const onDisplay = async () => {
    let response = await fetch("http://localhost:3001/display", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();
    // console.log("WEFW", res.data);
    setapiMoviesData(res.data);
  };
  useEffect(() => {
    onDisplay();
  }, []);
  // console.log("Ewrf", apiMoviesData);

  var allArr = moviesData.filter((x) => {
    return (
      (genre !== "" ? x.genre.includes(genre) : x.genre) &&
      (format !== "" ? x.format.includes(format) : x.format) &&
      (language !== "" ? x.language.includes(language) : x.language)
    );
  });
  // console.log("all ultimate", allArr);
  // console.log(genre, format, language);
  const Filter = async () => {
    let response = await fetch("http://localhost:3002/apifilter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieGenre: genre,
        movieLanguage: language,
        movieFormat: format,
      }),
    });

    const res = await response.json();
    setapiMoviesData(res.myData);
    console.log("filter data ", res.myData);
  };
  useEffect(() => {
    Filter();
  }, [genre, language, format]);
  return (
    <div className={styles.moviesContainer}>
      <Header onMovieHandler={MovieHandler} />
      <div className={styles.moviesWrapper}>
        {apiMoviesData.slice(0, 10).map((movie: any) => (
          <Movie
            name={movie.movieName}
            genre={movie.movieGenre}
            language={movie.movieLanguage}
            format={movie.movieFormat}
            src={movie.movieImage}
          /> 
        ))}
      </div>
    </div>
  );
};

export default Movies;
