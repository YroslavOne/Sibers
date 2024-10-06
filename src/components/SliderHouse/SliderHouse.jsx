import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderHouse.module.css";
import HouseCard from '../HouseCard/HouseCard'


function SliderHouse({sliderRef, houseList}) {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
  };


  return (
    <div className={styles['slider-navigation']}>
      <Slider
        {...settings}
        ref={sliderRef}
        className={styles['slider-navigation__slider']}
      >
        {houseList.map((house, index) => (
          <HouseCard
            backgroundIco={house.icon.background}
            colorIco={house.icon.color}
            image={house.image}
            imageIco={house.icon.img}
            imageSalesman={house.salesman.img}
            nameSalesman={house.salesman.name}
            price={house.price}
            textIco={house.icon.text}
            title={house.title}
            key={index}
          />
        ))}
      </Slider>
    </div>
  );
}

export default SliderHouse;
