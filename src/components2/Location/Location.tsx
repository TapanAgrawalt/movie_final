import { useState } from "react";
import CityCard from "./CityCard";
import styles from "./Location.module.css";
import React from "react";

const cities = [
  {
    city: "Ahemdabad",
    imagePath: "/assets/cities/Ahmedabad.png",
  },
  {
    city: "Bengaluru",
    imagePath: "/assets/cities/bengaluru.png",
  },
  {
    city: "Chandigarh",
    imagePath: "/assets/cities/chandigarh.png",
  },
  {
    city: "Chennai",
    imagePath: "/assets/cities/chennai.png",
  },
  {
    city: "Delhi",
    imagePath: "/assets/cities/delhi.png",
  },
  {
    city: "Hyderabad",
    imagePath: "/assets/cities/hyderabad.png",
  },
  {
    city: "Kolkata",
    imagePath: "/assets/cities/kolkata.png",
  },
  {
    city: "Mumbai",
    imagePath: "/assets/cities/mumbai.png",
  },
];

type LocationProps = {
  onCityHandler: (city:string) => void;
};

const Location = ({ onCityHandler }: LocationProps) => {
  const initialCities: number = 8;
  const [moreCities, setmoreCities] = useState<number>(initialCities);

  const handleClick = () => {
    if (moreCities < 20) setmoreCities((moreCities) => moreCities + 4);
    else setmoreCities(initialCities);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cityCardContainer}>
        <input type="text" placeholder="Search City" />
        {cities.slice(0, moreCities).map((city) => (
          <CityCard
            key={city.city}
            city={city.city}
            cityImage={city.imagePath}
            onCityHandler={onCityHandler}
          />
        ))}
      </div>
      <span id={styles.more} onClick={handleClick}>
        View {moreCities < 20 ? "more" : "less"}
      </span>
    </div>
  );
};

export default Location;
