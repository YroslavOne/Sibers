import styles from './PartnerCard.module.css';
import Clock from '../../../public/partners/clock.png'

function PartnerCard({
  isFeatured,
  image,
  title,
  description,
  clientImage,
  clientName,
  readTime,
  date,
}) {
  return (
    <div
      className={
        isFeatured ? styles['partner-card__featured'] : styles['partner-card']
      }
    >
      <img
        src={image}
        className={
          isFeatured
            ? styles['partner-card__featured-image']
            : styles['partner-card__image']
        }
      />
      <div className={styles['partner-card__content']}>
        <div className={styles['partner-card__people']}>
          <img
            src={clientImage}
            className={styles['partner-card__people-image']}
          />

          <p className={styles['partner-card__people-p']}>{clientName}</p>
        </div>
        <div className={styles['partner-card__text']}>
          <h3
            className={
              isFeatured
                ? styles['partner-card__featured-title']
                : styles['partner-card__title']
            }
          >
            {title}
          </h3>
          {isFeatured && (
            <p className={styles['partner-card__content-description']}>
              {description}
            </p>
          )}
					</div>
          <div className={styles['partner-card__date']}>
            <img src={Clock} />
            <span>
              {readTime} | {date}
            </span>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;
