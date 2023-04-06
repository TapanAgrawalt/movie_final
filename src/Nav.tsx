import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import HeroSlider, { Slide, Overlay, AutoplayButton } from "hero-slider";
import img1 from "/home/tmdev/Documents/Tapan/Movie/my-app/src/Banners/Banner_img1.png";
import img2 from "/home/tmdev/Documents/Tapan/Movie/my-app/src/Banners/BannerImg2.png";
import img3 from "/home/tmdev/Documents/Tapan/Movie/my-app/src/Banners/BannerImg3.png";
import img4 from "/home/tmdev/Documents/Tapan/Movie/my-app/src/Banners/BannerImg4.png";
import Location from "./components2/Location/Location";
function Nav() {
  const [cityName, setCityName] = useState<string | null>(() =>
    sessionStorage.getItem("CITY")
  );
  const [state, setState] = useState(() => (cityName == null ? true : false));
  const cityHandler = (city: string) => {
    sessionStorage.setItem("CITY", city);
    setCityName(city);
    setState(!state);
  };
  const Toggle = () => {
    setState(!state);
  };

  return (
    <header>
      <div className={classes.navbc}>
        <div className={classes.display}>
          <div>
            <img
              width="150px"
              height="37.98px"
              src="https://www.figma.com/file/ufAJgNV1SNSf3HM9Yy6Uo2/image/bdd65d2ae897470d6bb18a53c0b81483d29c1fd2?fuid=1217755106454056053"
            />
          </div>
          <AiOutlineSearch className={classes.left} />
          <div className={classes.dl}>
            <input className={classes.input} type="text"></input>
            <BsFillMicFill className={classes.right}></BsFillMicFill>
          </div>
          <div className={classes.colw}>
            <CiLocationOn />
          </div>
          <div className={classes.colww} onClick={Toggle}>
            {cityName}
          </div>
          <div className={classes.colw}>
            <a href="/Register">LOG IN/Register</a>
          </div>
        </div>
        <div className={classes.bot}>
          <ul className={classes.dfl1}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">THEATERS</a>
            </li>
            <li>
              <a href="#">ABOUTUS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>

          <ul className={classes.dfl2}>
            <li>
              <a href="#">CORPORATE</a>
            </li>
            <li>
              <a href="#">OFFERS</a>
            </li>
            <li>
              <a href="#">GIFTCART</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </div>

        <div>
          <HeroSlider
            height="50vh"
            controller={{
              initialSlide: 1,
              slidingDuration: 1000,
              slidingDelay: 100,
            }}
            autoplay={{
              autoplayDuration: 4000,
              autoplayDebounce: 0,
            }}
          >
            <Slide
              background={{
                backgroundColor: "#8A8A8A",
                maskBackgroundBlendMode: "luminosity",
                backgroundImageSrc: img1,
                backgroundAnimation: "fade",
              }}
            />

            <Slide
              background={{
                backgroundColor: "#8A8A8A",
                maskBackgroundBlendMode: "luminosity",
                backgroundImageSrc: img2,
                backgroundAnimation: "fade",
              }}
            />

            <Slide
              background={{
                backgroundColor: "#8A8A8A",
                maskBackgroundBlendMode: "luminosity",
                backgroundImageSrc: img3,
                backgroundAnimation: "fade",
              }}
            />

            <Slide
              background={{
                backgroundColor: "#8A8A8A",
                maskBackgroundBlendMode: "luminosity",
                backgroundImageSrc: img4,
                backgroundAnimation: "fade",
              }}
            />
          </HeroSlider>
        </div>
      </div>
      {state ? <Location onCityHandler={cityHandler} /> : null}
    </header>
  );
}

export default Nav;
