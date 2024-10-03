import styles from './Menu.module.css';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import Logo from '../../../public/menu/logo.svg';

function Menu() {
  const links = [
    { text: 'About Us', href: '#', img: false },
    { text: 'Article', href: '#', img: false },
    { text: 'Property', href: '#', img: true },
  ];

  return (
    <header className={styles['menu']}>
      <div className={styles['menu__logo']}>
        <img src={Logo} alt="" className={styles['menu__logo-img']} />
        <a href="#" className={styles['menu__logo-text']}>
          Hounter
        </a>
      </div>

      <div className={styles['menu__buttons']}>
        <nav className={styles['menu__button-left']}>
          <ul className={styles['button-left__ul']}>
            {links.map((link, index) => (
              <li key={index} className={styles['button-left__li']}>
                <a href={link.href} className={styles['button-left__a']}>
                  <ButtonMenu name={link.text} img={link.img} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className={styles['menu__button-right']}>Sign Up!</button>
      </div>
    </header>
  );
}
export default Menu;
