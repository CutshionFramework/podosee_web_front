import { useMediaQuery } from "react-responsive";
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
          <a href='/' className={isMobile ? styles.logo_mobile : styles.logo}>
            <img src={podoseeLogo} alt='Podosee Logo' />
          </a>

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
            <a
              href='https://www.facebook.com/podosee2014/?modal=composer&notif_id=1560488657953530&notif_t=aymt_upsell_tip&ref=notif'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a
              href='https://blog.naver.com/podosee7'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={naverIcon} alt='Naver' />
            </a>
          </div>

          <p className={styles.copyright}>
            Copyright © 2023 Podosee All right reserved
          </p>
        </div>

        <nav className={styles.right_section}>
          <div className={styles.menu_column}>
            <h3>JAKA</h3>
            <ul>
              <li>Zu series</li>
              <li>All-in-one series</li>
              <li>Pro series</li>
              <li>MiniCobo</li>
            </ul>
          </div>

          <div className={styles.menu_column}>
            <h3>통합솔루션</h3>
            <ul>
              <li>AI 키오스크</li>
              <li>AMR</li>
              <li>오스틴 랩</li>
              <li>제품시</li>
            </ul>
          </div>

          <div className={styles.menu_column}>
            <h3>회사소개</h3>
            <ul>
              <li>대표이사 인사말</li>
              <li>연혁</li>
            </ul>
          </div>

          <div className={styles.menu_column}>
            <h3>뉴스</h3>
            <ul>
              <li>언론 보도</li>
            </ul>
          </div>

          <div className={styles.menu_column}>
            <h3>문의</h3>
            <ul>
              <li>문의하기</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
