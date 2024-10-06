import React from 'react';
import Button from '../Button/Button';
import styles from './Partners.module.css';
import Partner1 from '../../../public/partners/partner1.png';
import Partner2 from '../../../public/partners/partner2.png';
import Partner3 from '../../../public/partners/partner3.png';
import Partner4 from '../../../public/partners/partner4.png';
import People1 from '../../../public/partners/people/people1.png';
import People2 from '../../../public/partners/people/people2.png';
import People3 from '../../../public/partners/people/people3.png';
import People4 from '../../../public/partners/people/people4.png';
import PartnerCard from '../PartnerCard/PartnerCard';

function Partners() {
  const partnerList = [
    {
      image: Partner1,
      people: {
        image: People1,
        name: 'Dianne Russell',
      },
      title: 'The things we need to check when we want to buy a house',
      description: 'The things we need to check when we want to buy a house',
      date: '25 Apr 2021',
      readTime: '4 min read',
      isFeatured: false,
    },
    {
      image: Partner2,
      people: {
        image: People2,
        name: 'Courtney Henry',
      },
      title: '7 Ways to distinguish the quality of the house we want to buy',
      description:
        '7 Ways to distinguish the quality of the house we want to buy',
      date: '24 Apr 2021',
      readTime: '6 min read',
      isFeatured: false,
    },
    {
      image: Partner3,
      people: {
        image: People3,
        name: 'Darlene Robertson',
      },
      title: 'The best way to know the quality of the house we want to buy',
      description:
        'The best way to know the quality of the house we want to buy',
      date: '24 Apr 2021',
      readTime: '2 min read',
      isFeatured: false,
    },
    {
      image: Partner4,
      people: {
        image: People4,
        name: 'Cameron Williamson',
      },
      title:
        'The things we need to check when we want to buy a house12 Things to know before buying a house',
      description:
        'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
      date: '25 Apr 2021',
      readTime: '8 min read',
      isFeatured: true,
    },
  ];

  return (
    <div className={styles['partners']}>
      <div>
        <div></div>
        <p>See tips and trick from our partnership</p>
      </div>
      <h2>Find out more about selling and buying homes</h2>
      <Button text="More Artikel" />

      <div className={styles['partner-card__grid']}>
        <div className={styles['left-container']}>
          {partnerList
            .filter((item) => !item.isFeatured)
            .map((item, index) => (
              <PartnerCard
                isFeatured={item.isFeatured}
                image={item.image}
                title={item.title}
                clientImage={item.people.image}
                clientName={item.people.name}
                readTime={item.readTime}
                date={item.date}
                key={index}
              />
            ))}
        </div>

        <div className={styles['right-container']}>
          {partnerList
            .filter((item) => item.isFeatured)
            .map((item, index) => (
              <PartnerCard
                isFeatured={item.isFeatured}
                image={item.image}
                title={item.title}
                description={item.description}
                clientImage={item.people.image}
                clientName={item.people.name}
                readTime={item.readTime}
                date={item.date}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
