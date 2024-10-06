import styles from './ReviewCard.module.css';

function ReviewCard({
  image,
  title,
  description,
  clientImage,
  clientName,
  clientStatus,
  clientGrade,
}) {
  return (
    <div className={styles['review-card']}>
      <img src={image} className={styles['review-card__img']} />
      <div className={styles['review-card__window']}>
        <h4 className={styles['review-card__window-title']}>{title}</h4>
        <p className={styles['review-card__window-description']}>
          {description}
        </p>
        <div className={styles['review-card__window-manager']}>
          <h5 className={styles['review-manager__name']}>{clientName}</h5>
          <p className={styles['review-manager__status']}>{clientStatus}</p>
          <div>
            <img className={styles['review-manager__img']} src={clientImage} />
            <p className={styles['review-manager__grade']}>{clientGrade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;