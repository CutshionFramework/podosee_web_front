import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";
import images from "../../constants/imagePath";
import routes from "../../constants/routes";

export default function Footer() {
  const { t } = useTranslation();
  const menu = t("header.menu", { returnObjects: true });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left_section}>
          <Link
            to={routes.home}
            className={isMobile ? styles.logo_mobile : styles.logo}
          >
            <img src={images.icons.podosee} alt='Podosee Logo' />
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
              to={routes.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={images.icons.facebook} alt='Facebook' />
            </Link>
            <Link to={routes.naver} target='_blank' rel='noopener noreferrer'>
              <img src={images.icons.naver} alt='Naver' />
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
