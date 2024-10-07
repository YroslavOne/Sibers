import styles from "./ReviewCard.module.css";
import Star from '../../../public/reviews/star.png'

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
    <div className={styles["review-card"]}>
      <img src={image} className={styles["review-card__img"]} />
      <div className={styles["review-card__window"]}>
        <h4 className={styles["review-card__window-title"]}>{title}</h4>
        <p className={styles["review-card__window-description"]}>
          {description}
        </p>
        <div className={styles["review-card__window-manager"]}>
          <div className={styles["window-manager__detail"]}>
          <img src={clientImage} />
          <div className={styles["window-manager__info"]}>
          <h5 className={styles["review-manager__name"]}>{clientName}</h5>
          <p className={styles["review-manager__status"]}>{clientStatus}</p>
          </div>
          </div>
          <div>
            <div className={styles["review-manager__rating"]}>
            <img className={styles["review-manager__img"]} src={Star} />
            <p className={styles["review-manager__grade"]}>{clientGrade}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReviewCard;
