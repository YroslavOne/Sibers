import Arrow from '../../../public/menu/arrow.svg';
import styles from './ButtonMenu.module.css';

function ButtonMenu({ name, img }) {
  return (
    <button className={styles['button']}>
      {name}
      {img && <img src={Arrow} className={styles['button-img']} />}
    </button>
  );
}
export default ButtonMenu;
