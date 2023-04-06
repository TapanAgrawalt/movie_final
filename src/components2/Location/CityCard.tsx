import styles from "./CityCard.module.css";
import React, { useState } from "react";
import { createContext } from "react";
import Nav from "../../Nav";
import App from "../../App";

type CityCardProps = {
  city: string;
  cityImage: string;
  onCityHandler: (city:string) => void;
};

const CityCard = ({ city, cityImage ,onCityHandler}: CityCardProps) => {
  // const [cityName, setCityName] = useState<string>();

  // console.log(cityName);

  return (
    <div
      className={`${styles.card}`}
      onClick={() => {
        onCityHandler(city);
      }}
    >
      <img className={styles.card} src={cityImage} />
      <p>{city}</p>
    </div>
  );
};

export default CityCard;
