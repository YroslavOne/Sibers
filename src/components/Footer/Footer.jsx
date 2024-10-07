import styles from './Footer.module.css';
import Facebook from '../../../public/footer/facebook.png';
import Insta from '../../../public/footer/insta.png';
import Twitter from '../../../public/footer/twitter.png';
import Logo from '../../../public/menu/logo.svg';

function Footer() {
  const socialnNetwork = [
    {
      link: '#',
      icon: Facebook,
      name: 'facebook',
    },
    {
      link: '#',
      icon: Insta,
      name: 'insta',
    },
    {
      link: '#',
      icon: Twitter,
      name: 'twitter',
    },
  ];
  const FooterMenu = [
    {
      name: 'Property',
      link: [
        {
          name: 'House',
          link: '#',
        },
        {
          name: 'Apartment',
          link: '#',
        },
        {
          name: 'Villa',
          link: '#',
        },
      ],
    },
    {
      name: 'Article',
      link: [
        {
          name: 'New Article',
          link: '#',
        },
        {
          name: 'Popular Article',
          link: '#',
        },
        {
          name: 'Most Read',
          link: '#',
        },
        {
          name: 'Tips & Tricks',
          link: '#',
        },
      ],
    },
    {
      name: 'Contact',
      link: [
        {
          name: '2464 Royal Ln. Mesa, New Jersey 45463',
          link: '#',
        },
        {
          name: '(671) 555-0110',
          link: '#',
        },
        {
          name: 'info@hounter.com',
          link: '#',
        },
      ],
    },
  ];

  return (
    <div className={styles['footer']}>
      <div className={styles['footer__information']}>
        <div className={styles['footer__information-logo']}>
          <img src={Logo} alt="logo" />
          <p className={styles['footer__logo-text']}>Hounter</p>
        </div>
        <p className={styles['footer__information-p']}>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </p>

        <div className={styles['footer__socialn-network']}>
          {socialnNetwork.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
      <div className={styles['footer__menu']}>
        {FooterMenu.map((item, index) => (
          <div className={styles['footer__menu-item']} key={index}>
            <p>{item.name}</p>
            {item.link.map((item, index) => (
              <a
                className={styles['footer__menu-link']}
                key={index + index}
                href={item.link}
              >
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Footer;
