import styles from './DescriptionGallery.module.css';
import Icon1 from '../../../public/block-gallery/icon/icon1.png';
import Icon2 from '../../../public/block-gallery/icon/icon2.png';
import Icon3 from '../../../public/block-gallery/icon/icon3.png';
import Icon4 from '../../../public/block-gallery/icon/icon4.png';
import Phone from '../../../public/block-gallery/phone.png';
import Manager from '../../../public/block-gallery/manager.png';

const detailsList = [
  {
    name: '4 Bedrooms',
    image: Icon1,
  },
  {
    name: '2 Bathrooms',
    image: Icon2,
  },
  {
    name: '1 Carport',
    image: Icon3,
  },
  {
    name: '2 Floors',
    image: Icon4,
  },
];

function DescriptionGallery() {
  return (
    <div className={styles['description-gallery']}>
      <p className={styles['description-gallery__name']}>
        <span></span> Ready to Sell!
      </p>
      <h2 className={styles['description-gallery__title']}>
        Let’s tour and see our house!
      </h2>
      <p className={styles['description-gallery__description']}>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <div className={styles['description-gallery__detail']}>
        <h5 className={styles['gallery-detail__title']}>House Detail</h5>
        <ul className={styles['gallery-detail__items']}>
          {detailsList.map((detail, index) => (
            <li className={styles['gallery-detail__item']}>
              <img
                className={styles['gallery-detail__items-img']}
                src={detail.image}
              />
              <p className={styles['gallery-detail__items-name']}>
                {detail.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['description-gallery__manager']}>
        <img
          className={styles['description-gallery__manager-img']}
          src={Manager}
        />
        <div className={styles['description-gallery__manager-info']}>
          <h5 className={styles['manager-info__name']}>Dianne Russell</h5>
          <p className={styles['manager-info__status']}>Manager Director</p>
        </div>
        <button>
          <img src={Phone} /> Contact Now
        </button>
      </div>
    </div>
  );
}
export default DescriptionGallery;
