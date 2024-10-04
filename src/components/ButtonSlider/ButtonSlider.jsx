import styles from "./ButtonSlider.module.css";
import cn from "classnames";

function ButtonSlider({ left, onClick }) {
  return (
    <button
    onClick={onClick}
      className={
        left
          ? cn(styles["button-slider"], styles["button-slider__left"])
          : cn(styles["button-slider"], styles["button-slider__right"])
      }
    ></button>
  );
}
export default ButtonSlider;
