import styles from './DataWindow.module.css';

function DataWindow({ images, text, description, stroke }) {
  return (
    <div className={styles['data-window']}>
      <ul className={styles['data-window__list']}>
        {images.map((image, index) => (
          <li
            style={{
              marginLeft: !!index ? '-28px' : '0',
            }}
            className={styles['data-window__item']}
            key={index}
          >
            {' '}
            <img
              src={image}
              className={
                stroke
                  ? styles['data-window__item-img-stroke']
                  : styles['data-window__item-img']
              }
              alt=""
            />
          </li>
        ))}
      </ul>
      <div className={styles['data-window__details']}>
        <h5 className={styles['data-window__text']}>{text}</h5>
        <p className={styles['data-window__description']}>{description}</p>
      </div>
    </div>
  );
}
export default DataWindow;
