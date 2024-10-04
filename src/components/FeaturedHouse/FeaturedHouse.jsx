import styles from "./FeaturedHouse.module.css";
import House from "../../../public/featured-house/house-fill.svg";
import HouseActive from "../../../public/featured-house/house-fill-active.svg";
import Apartment from "../../../public/featured-house/round-apartment.svg";
import ApartmentActive from "../../../public/featured-house/round-apartment-active.svg";
import Villa from "../../../public/featured-house/round-villa.svg";
import VillaActive from "../../../public/featured-house/round-villa-active.svg";
import ButtonHouseSlider from "../ButtonHouseSlider/ButtonHouseSlider.jsx";
import { useState, useRef } from "react";
import SliderHouse from "../SliderHouse/SliderHouse.jsx";
import ButtonSlider from "../ButtonSlider/ButtonSlider";
import Fire from "../../../public/house-card/icon/fire.svg";
import Home from "../../../public/house-card/icon/home.svg";
import Wallet from "../../../public/house-card/icon/wallet.svg";
import House1 from "../../../public/house-card/house1.png";
import House2 from "../../../public/house-card/house2.png";
import House3 from "../../../public/house-card/house3.png";
import House4 from "../../../public/house-card/house4.png";
import Salesman1 from "../../../public/house-card/salesman/salesman1.png";
import Salesman2 from "../../../public/house-card/salesman/salesman2.png";
import Salesman3 from "../../../public/house-card/salesman/salesman3.png";
import Salesman4 from "../../../public/house-card/salesman/salesman4.png";

function FeaturedHouse() {
  const [active, setActive] = useState("House");
  const sliderRef = useRef(null);
  const variantHouses = [
    {
      icon: House,
      iconActive: HouseActive,
      name: "House",
    },
    {
      icon: Villa,
      iconActive: VillaActive,
      name: "Villa",
    },
    {
      icon: Apartment,
      iconActive: ApartmentActive,
      name: "Apartment",
    },
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const houseList = [
    
    {
      title: "Roselands House",
      image: House1,
      price: "35.000.000",
      icon: {
        color: "rgb(239, 68, 68)",
        text: "Popular",
        img: Fire,
        background: "rgb(254, 226, 226)",
      },
      salesman: {
        img: Salesman1,
        name: "Dianne Russell",
        description: "Manchester, Kentucky",
      },
    },
    {
      title: "Woodlandside",
      image: House2,
      price: "20.000.000",
      icon: {
        color: "rgb(29, 78, 216)",
        text: "New house",
        img: Home,
        background: "rgb(219, 234, 254)",
      },
      salesman: {
        img: Salesman2,
        name: "Robert Fox",
        description: "Dr. San Jose, South Dakota",
      },
    },
    {
      title: "The Old Lighthouse",
      image: House3,
      price: "44.000.000",
      icon: {
        color: "rgb(4, 120, 87)",
        text: "PopularBest Deals",
        img: Wallet,
        background: "rgb(209, 250, 229)",
      },
      salesman: {
        img: Salesman3,
        name: "Ronald Richards",
        description: "Santa Ana, Illinois",
      },
    },
    {
      title: "Cosmo's House",
      image: House4,
      price: "22.000.000",
      icon: {
        color: "rgb(239, 68, 68)",
        text: "Popular",
        img: Fire,
        background: "rgb(254, 226, 226)",
      },
      salesman: {
        img: Salesman4,
        name: "Jenny Wilson",
        description: "Preston Rd. Inglewood, Maine 98380",
      },
    },
  ];

  return (
    <div className={styles["featured-house"]}>
      <p>
        <span></span> Our Recommendation
      </p>
      <div className={styles["featured-house__slider"]}>
        <div className={styles["slider__head"]}>
          <h2 className={styles["slider__head-h2"]}>Featured House</h2>
          <div className={styles["slider__head-variant"]}>
            <ul className={styles["slider__head-variant-ul"]}>
              {variantHouses.map((house, index) => (
                <li key={index}>
                  <ButtonHouseSlider
                    active={active}
                    setActive={setActive}
                    icon={house.icon}
                    iconActive={house.iconActive}
                    name={house.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["slider-navigation__button"]}>
            <ButtonSlider onClick={handlePrev} left={true} />
            <ButtonSlider onClick={handleNext} left={false} />
          </div>
        </div>
        <SliderHouse sliderRef={sliderRef} houseList={houseList}/>
      </div>
    </div>
  );
}
export default FeaturedHouse;
