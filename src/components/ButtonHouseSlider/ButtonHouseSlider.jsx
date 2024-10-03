import styles from './ButtonHouseSlider.module.css';
import cn from 'classnames';

function ButtonHouseSlider({ active,setActive, icon, iconActive, name }) {
  return (
    <button
      onClick={() => setActive(name)}
      className={
        active === name
          ? cn(
              styles['button-house-slider__active'],
              styles['button-house-slider']
            )
          : cn(
              styles['button-house-slider__disactive'],
              styles['button-house-slider']
            )
      }
    >
      <img src={active === name ? iconActive : icon} />
      {name}
    </button>
  );
}
export default ButtonHouseSlider;
