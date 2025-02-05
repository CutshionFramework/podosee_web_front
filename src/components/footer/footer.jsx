import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import menuData from "../header/header.json";

import naverIcon from "../../assets/naver_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import podoseeLogo from "../../assets/podosee.png";
import styles from "./footer.module.scss";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left_section}>
          <Link to='/' className={isMobile ? styles.logo_mobile : styles.logo}>
            <img src={podoseeLogo} alt='Podosee Logo' />
          </Link>

          <div className={styles.company_info}>
            <p>대 표 : 모신희</p>
            <p>주 소 : 서울시 영등포구 선유로 9길 10, 709호</p>
            <p>(문래동 6가, 문래 SK V1 Center)</p>
            <p className={styles.contact}>
              <span>연락처 : 070-8959-2960</span>
              <span>이메일 : podosee@podosee.com</span>
            </p>
          </div>

          <div className={styles.social_links}>
            <Link
              to='https://www.facebook.com/podosee2014/?modal=composer&notif_id=1560488657953530&notif_t=aymt_upsell_tip&ref=notif'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebookIcon} alt='Facebook' />
            </Link>
            <Link
              to='https://blog.naver.com/podosee7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={naverIcon} alt='Naver' />
            </Link>
          </div>

          <p className={styles.copyright}>
            Copyright © 2023 Podosee All right reserved
          </p>
        </div>

        <nav className={styles.right_section}>
          {menuData.map((menu, index) => (
            <div key={index} className={styles.menu_column}>
              <h3>{menu.title}</h3>
              <ul>
                {menu.sub.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link to={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
