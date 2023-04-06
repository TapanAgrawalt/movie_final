import Filters from "./Filters";
import React from 'react';
import styles from "./MoviesHeader.module.css";
import { type } from "os";

type HeaderProps={
  onMovieHandler:(gen:any,format:any,lan:any)=>void
}
const Header = ({onMovieHandler}:HeaderProps) => {
  return (
    <div className={styles.moviesHeader}>
      <div className={styles.moviesHeader__head}>
        <h2>Movies</h2>
      </div>
      <Filters 
      onMovieHandler={onMovieHandler}/>
    </div>
  );
};

export default Header;
