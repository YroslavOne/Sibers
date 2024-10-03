import styles from './FeaturedHouse.module.css';
import House from '../../../public/featured-house/house-fill.svg';
import HouseActive from '../../../public/featured-house/house-fill-active.svg';
import Apartment from '../../../public/featured-house/round-apartment.svg';
import ApartmentActive from '../../../public/featured-house/round-apartment-active.svg';
import Villa from '../../../public/featured-house/round-villa.svg';
import VillaActive from '../../../public/featured-house/round-villa-active.svg';
import ButtonHouseSlider from '../ButtonHouseSlider/ButtonHouseSlider.jsx';
import { useState } from 'react';

function FeaturedHouse() {
	const [active, setActive] =  useState("House")
  const variantHouses = [
    {
      icon: House,
      iconActive: HouseActive,
      name: 'House',
    },
    {
      icon: Villa,
      iconActive: VillaActive,
      name: 'Villa',
    },
    {
      icon: Apartment,
      iconActive: ApartmentActive,
      name: 'Apartment',
    },
  ];

  return (
    <div className={styles['featured-house']}>
      <p>
        <span></span> Our Recommendation
      </p>
      <div className={styles['featured-house__slider']}>
        <div className={styles['slider__head']}>
          <h2 className={styles['slider__head-h2']}>Featured House</h2>
          <div className={styles['slider__head-variant']}>
            <ul>
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
        </div>
      </div>
    </div>
  );
}
export default FeaturedHouse;
