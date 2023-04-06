import { useState } from "react";
import { MdClear } from "react-icons/md";
import React from "react";

import styles from "./MoviesHeader.module.css";

type FilterProps = {
  onMovieHandler: (gen: any, format: any, lan: any) => void;
};
const Filters = ({ onMovieHandler }: FilterProps) => {
  const genres = [
    {
      value: 1,
      name: "action",
    },
    {
      value: 2,
      name: "romance",
    },
    {
      value: 3,
      name: "thriller",
    },
    {
      value: 4,
      name: "sports",
    },
    {
      value: 5,
      name: "comedy",
    },
    {
      value: 6,
      name: "sci-fi",
    },
    {
      value: 7,
      name: "horror",
    },
  ];
  const formats = [
    {
      value: 1,
      name: "2D",
    },
    {
      value: 2,
      name: "3D",
    },
    {
      value: 3,
      name: "4D",
    },
    {
      value: 4,
      name: "5D",
    },
  ];
  const languages = [
    {
      value: 1,
      name: "mandarin",
    },
    {
      value: 2,
      name: "french",
    },
    {
      value: 3,
      name: "japanese",
    },
    {
      value: 4,
      name: "hindi",
    },
    {
      value: 5,
      name: "gujarati",
    },
    {
      value: 6,
      name: "english",
    },
  ];
  const [genre, setGenre] = useState<any>("");
  const [format, setFormat] = useState<any>("");
  const [language, setLanguage] = useState<any>("");

  onMovieHandler(genre, format, language);

  return (
    <div className={styles.moviesFilters}>
      <div>
        <select>
          <option value={genre} hidden>
            Genre
          </option>
          {genres.map((x) => (
            <option
              value={x.value}
              onClick={() => {
                setGenre(x.name);
              }}
            >
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select>
          <option value={genre} hidden>
            Format
          </option>
          {formats.map((x) => (
            <option
              value={x.value}
              onClick={() => {
                setFormat(x.name);
              }}
            >
              {x.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select>
          <option value={language} hidden>
            Language
          </option>
          {languages.map((x) => (
            <option
              value={x.value}
              onClick={() => {
                setLanguage(x.name);
              }}
            >
              {x.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
