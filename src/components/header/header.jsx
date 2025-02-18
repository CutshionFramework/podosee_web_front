import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './header.module.scss';

import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

import images from '../../constants/imagePath';

export default function Header() {
  const { t, i18n } = useTranslation();
  const menu = t('header.menu', { returnObjects: true });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 열기 상태
  const [languageOpen, setLanguageOpen] = useState(false); // 언어 메뉴 열기 상태
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('selectedLang') || 'KR';
  });

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const availableLanguages = ['KR', 'EN']; // 지원하는 언어 목록

  // 페이지 로드 시 언어 설정
  useEffect(() => {
    // 로컬스토리지에서 언어 설정 값을 가져와 i18n에 적용
    if (selectedLang === 'KR') {
      i18n.changeLanguage('kr');
    } else if (selectedLang === 'EN') {
      i18n.changeLanguage('en');
    }
  }, [selectedLang, i18n]);

  // 메뉴 열기 상태가 변경될 때마다 스크롤 잠금/해제 처리
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // 메뉴 열리면 스크롤 잠금
    } else {
      document.body.style.overflow = ''; // 메뉴 닫히면 스크롤 활성화
    }

    // cleanup: 컴포넌트가 언마운트될 때 스타일을 원래대로 되돌려놓음
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // 모바일에서 메뉴 클릭 시 드롭다운 토글
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // 언어 변경 핸들러
  const handleLanguageChange = (lang) => {
    if (lang === 'KR') {
      i18n.changeLanguage('kr');
    } else if (lang === 'EN') {
      i18n.changeLanguage('en');
    }

    setSelectedLang(lang);
    localStorage.setItem('selectedLang', lang);
    setLanguageOpen(false); // 선택 후 닫기
  };

  return (
    <header className={styles.header}>
      <Link to='/' className={isMobile ? styles.logo_mobile : styles.logo}>
        <img src={images.icons.podosee} alt='Podosee Logo' />
      </Link>

      {isMobile ? (
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}>
          <RxHamburgerMenu size={30} />
        </button>
      ) : null}

      <nav
        className={
          isMobile
            ? menuOpen
              ? styles.nav_open
              : styles.nav_closed
            : styles.nav
        }>
        <ul>
          {menu.map((menu, index) => (
            <li
              key={index}
              className={`${styles.nav_item} ${
                activeDropdown === index ? styles.active : ''
              }`}
              onMouseEnter={
                !isMobile ? () => setActiveDropdown(index) : undefined
              }
              onMouseLeave={
                !isMobile ? () => setActiveDropdown(null) : undefined
              }
              onClick={
                isMobile ? () => handleDropdownToggle(index) : undefined
              }>
              <Link to={menu.link || '#'}>{menu.title}</Link>

              {menu.sub.length > 0 && (
                <ul
                  className={`${styles.dropdown} ${
                    activeDropdown === index ? styles.active : ''
                  }`}>
                  {menu.sub.map((sub, subIndex) => (
                    <li key={subIndex} className={styles.dropdown_item}>
                      <Link to={sub.link || '#'}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* 언어 선택 드롭다운 */}
          <li className={styles.language_selector}>
            <button onClick={() => setLanguageOpen((prev) => !prev)}>
              {selectedLang}{' '}
              {languageOpen ? (
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <MdOutlineKeyboardArrowUp size={21} />
                </span>
              ) : (
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <MdOutlineKeyboardArrowDown size={21} />
                </span>
              )}
            </button>

            {languageOpen && (
              <ul className={styles.language_dropdown}>
                {availableLanguages
                  .filter((lang) => lang !== selectedLang) // 현재 선택된 언어 제외
                  .map((lang) => (
                    <li key={lang} onClick={() => handleLanguageChange(lang)}>
                      {lang}
                    </li>
                  ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
