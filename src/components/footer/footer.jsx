import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";

export default function Footer() {
  const { t } = useTranslation();
  const menu = t("header.menu", { returnObjects: true });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left_section}>
          <Link to='/' className={isMobile ? styles.logo_mobile : styles.logo}>
            <img src='/assets/icon/podosee.png' alt='Podosee Logo' />
          </Link>

          <div className={styles.company_info}>
            <p>{t("footer.ceo")}</p>
            <p>{t("footer.address")}</p>
            <p>{t("footer.address_detail")}</p>
            <p className={styles.contact}>
              <span>{t("footer.contact")}</span>
              <span>{t("footer.email")}</span>
            </p>
          </div>

          <div className={styles.social_links}>
            <Link
              to='https://www.facebook.com/podosee2014/?modal=composer&notif_id=1560488657953530&notif_t=aymt_upsell_tip&ref=notif'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/assets/icon/facebook_icon.png' alt='Facebook' />
            </Link>
            <Link
              to='https://blog.naver.com/podosee7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/assets/icon/naver_icon.png' alt='Naver' />
            </Link>
          </div>

          <p className={styles.copyright}>
            Copyright © 2023 Podosee All right reserved
          </p>
        </div>

        <nav className={styles.right_section}>
          {menu.map((menu, index) => (
            <div key={index} className={styles.menu_column}>
              <h3>
                <Link to={menu.link}>{menu.title}</Link>
              </h3>
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
