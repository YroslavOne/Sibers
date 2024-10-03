import styles from './SearchInput.module.css';
import Point from '../../../public/block-main/point.svg'
import ArrowRight from '../../../public/block-main/arrow-right.svg';

function SearchInput(){

	return (
    <div className={styles['search-input']}>
      <img className={styles['search-input__img']} src={Point} alt="" />
      <input type="text" placeholder="Search for the location you want!" />
      <button className={styles['search-input__button']}>
        Search{' '}
        <img
          className={styles['search-input__button-img']}
          src={ArrowRight}
          alt=""
        />
      </button>
    </div>
  );

}
export default SearchInput;