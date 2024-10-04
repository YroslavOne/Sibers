import styles from './HouseCard.module.css'

function HouseCard({title, image, price, imageIco, colorIco, backgroundIco, textIco, imageSalesman, nameSalesman }){

	return (
    <div className={styles['house-card']}>
      <div className={styles['house-card__item']}>
        <img src={image}  />
        <div style={{background: backgroundIco}} className={styles['house-card__icon']}>
          <img src={imageIco}  />
          <p style={{color: colorIco}} className={styles['house-card__item-description']}></p>
        </div>
      </div>
      <div className={styles['house-card__details']}>
        <h3 className={styles['house-card__details-title']}>{title}</h3>
        <p className={styles['house-card__details-prise']}>$ {price}</p>
      </div>
			<div className={styles['house-card__salesman']}>
				<img src={imageSalesman} />
				<div className={styles['salesman__details']}>
					<h6 className={styles['salesman__details-title']}>{textIco}</h6>
					<p className={styles['salesman__details-description']}>{nameSalesman}</p>

				</div>
			</div>
    </div>
  );
}
export default HouseCard;