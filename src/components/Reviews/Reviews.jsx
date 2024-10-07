import styles from './Reviews.module.css';
import House1 from '../../../public/reviews/house1.png';
import House2 from '../../../public/reviews/house2.png';
import House3 from '../../../public/reviews/house3.png';
import Client1 from '../../../public/reviews/client/client1.png';
import Client2 from '../../../public/reviews/client/client2.png';
import Client3 from '../../../public/reviews/client/client3.png';
import Slider from 'react-slick';
import ReviewCard from '../ReviewCard/ReviewCard';

const reviewList = [
  {
    image: House1,
    title: 'My house sold out fast!',
    description:
      'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
    client: {
      image: Client1,
      name: 'Courtney Henry',
      status: 'CEO Andarafish',
      grade: 4.3,
    },
  },
  {
    image: House2,
    title: 'Best! I got the house I wanted through Hounter',
    description:
      'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
    client: {
      image: Client2,
      name: 'Dianne Russell',
      status: 'Manager Director',
      grade: '4.6',
    },
  },
  {
    image: House3,
    title: 'Through the Hounter, I can get a house for my self',
    description:
      'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
    client: {
      image: Client3,
      name: 'Esther Howard',
      status: 'Head of Marketing',
      grade: '4.6',
    },
  },
];

function Reviews() {
  const settings = {
    dots: true, // Показать индикаторы
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Показать 1 слайд за раз
    centerMode: true, // Включить центральный режим
    centerPadding: '23.9%', // Отступы по бокам, чтобы показывать края соседних слайдов
    slidesToScroll: 1, // Прокручивать по 1 слайду
    arrows: false, // Отключить стрелки
  };

  return (
    <div className={styles['rewiews']}>
      <div className={styles['rewiews__name']}>
        <div className={styles['rewiews__name-line']}></div>
        <p className={styles['rewiews__name-title']}>See Our Review</p>
      </div>
      <h2 className={styles['rewiews__title']}>What Our User Say About Us</h2>
      <div className={styles['rewiews__slider']}>
        <Slider {...settings}>
          {reviewList.map((review, index) => (
            <ReviewCard
              key={index}
              image={review.image}
              title={review.title}
              description={review.description}
              clientImage={review.client.image}
              clientName={review.client.name}
              clientStatus={review.client.status}
              clientGrade={review.client.grade}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Reviews;
