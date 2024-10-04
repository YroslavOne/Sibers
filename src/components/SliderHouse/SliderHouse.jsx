import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderHouse.module.css";
import HouseCard from '../HouseCard/HouseCard'


function SliderHouse({sliderRef, houseList}) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <div className={styles["slider-navigation"]} >
      <Slider {...settings} ref={sliderRef}>
      {houseList.map((house, index)=>(
        <HouseCard backgroundIco={house.icon.background} colorIco={house.icon.color} image={house.image} imageIco={house.icon.img} imageSalesman={house.salesman.img} nameSalesman={house.salesman.name} price={house.price} textIco={house.icon.text} title={house.title} key={index} />
      ))}
      </Slider>
    </div>
  );
}

export default SliderHouse;
