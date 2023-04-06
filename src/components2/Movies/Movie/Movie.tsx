import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";
import React from "react";


type MoviesProps = {
  name: string;
  genre: string[];
  language: string[];
  format: string[];
  src:any;
};

const Movie = (props: MoviesProps) => {

  const navigate = useNavigate();
  
  let x = Math.floor((Math.random() * 4) + 1);


  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {

    console.log(props.name);
    let moviename=props.name;
    console.log("this is movie name",props.name);
    localStorage.setItem("movieName",moviename)
    navigate(`/ticketbookingpage?message=${moviename}`)
   
  };
  return (
    <div className={styles.movieContainer} onClick={handleClick} >
      <img src={props.src}  alt="d"/>
      <h3 style={{fontSize:"18px"}}>{props.name}</h3>
      <p>U/A</p>
      <p>{props.genre.slice(x,x+3).toString()}</p>
    </div>
  );
};

export default Movie;
