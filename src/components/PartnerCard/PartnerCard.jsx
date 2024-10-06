import styles from './PartnerCard.module.css';

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
          <p className={styles['partner-card__content-description']}>{description}</p>
        )}
        <div className={styles['partner-card__client']}>
          <img src={clientImage} className={styles['people-image']} />
          <div className={styles['people-info']}>
            <p>{clientName}</p>
            <span>
              {readTime} | {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;