import styles from './MainBlock.module.css';
import Parthner1 from '../../../public/block-main/parthners/traveloka_logo1.png';
import Parthner2 from '../../../public/block-main/parthners/traveloka_logo2.png';
import Parthner3 from '../../../public/block-main/parthners/traveloka_logo3.png';
import Parthner4 from '../../../public/block-main/parthners/traveloka_logo4.png';
import SearchInput from '../SearchInput/SearchInput';
import DataWindow from '../DataWindow/DataWindow';
import ImageMain from '../../../public/block-main/image.png';
import People1 from '../../../public/block-main/data-window/Ellipse1.png';
import People2 from '../../../public/block-main/data-window/Ellipse2.png';
import People3 from '../../../public/block-main/data-window/Ellipse3.png';
import People5 from '../../../public/block-main/data-window/Ellipse5.png';
import People4 from '../../../public/block-main/data-window/Rectangle4.png';

function MainBlock() {
  const parthnerList = [
    { img: Parthner1 },
    { img: Parthner2 },
    { img: Parthner3 },
    { img: Parthner4 },
  ];

  const dataWindowList = [
    {
      text: '1K+ People',
      description: 'Successfully Getting Home',
      images: [People1, People2, People3],
			stroke: true
    },
    {
      text: '56 Houses',
      description: 'Sold Monthly',
      images: [People4],
			stroke: false
    },
    {
      text: '4K+',
      description: 'People Looking for New Homes',
      images: [People5],
			stroke: true
    },
  ];

  return (
    <div className={styles['main']}>
      <div className={styles['main__search-bar']}>
        <h1 className={styles['main__title']}>
          find the place to live <span> your dreams</span> easily here
        </h1>
        <p className={styles['main__description']}>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <SearchInput />
        <div className={styles['main__partners']}>
          <p className={styles['partners__title']}>Our Partnership </p>
          <ul className={styles['partners__list']}>
            {parthnerList.map((parthner, index) => (
              <li className={styles['partners__item']} key={index}>
                <img src={parthner.img} className={styles['partners__img']} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles['main__peoples']}>
        <img src={ImageMain} className={styles['main__peoples-img']} alt="" />
        <ul className={styles['main__peoples-ul']}>
          {dataWindowList.map((dataWindow, index) => (
            <li key={index} className={styles['main__peoples-li']}>
              <DataWindow
                description={dataWindow.description}
                text={dataWindow.text}
                images={dataWindow.images}
                stroke={dataWindow.stroke}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MainBlock;
