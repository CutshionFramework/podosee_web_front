import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./header.module.scss";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Header() {
  const { t, i18n } = useTranslation();
  const menu = t("header.menu", { returnObjects: true });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 열기 상태
  const [languageOpen, setLanguageOpen] = useState(false); // 언어 메뉴 열기 상태
  const [selectedLang, setSelectedLang] = useState("KR"); // 기본 언어 KR

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const availableLanguages = ["KR", "EN"]; // 지원하는 언어 목록

  // 모바일에서 메뉴 클릭 시 드롭다운 토글
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // 언어 변경 핸들러
  const handleLanguageChange = (lang) => {
    if (lang === "KR") {
      i18n.changeLanguage("kr");
    } else if (lang === "EN") {
      i18n.changeLanguage("en");
    }

    setSelectedLang(lang);
    setLanguageOpen(false); // 선택 후 닫기
  };

  return (
    <header className={styles.header}>
      <Link to='/' className={isMobile ? styles.logo_mobile : styles.logo}>
        <img src='/assets/icon/podosee.png' alt='Podosee Logo' />
      </Link>

      {isMobile ? (
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <RxHamburgerMenu size={30} />
        </button>
      ) : null}

      <nav
        className={`${styles.nav} ${
          isMobile ? (menuOpen ? styles.nav_open : styles.nav_closed) : ""
        }`}
      >
        <ul>
          {menu.map((menu, index) => (
            <li
              key={index}
              className={`${styles.nav_item} ${
                activeDropdown === index ? styles.active : ""
              }`}
              onMouseEnter={
                !isMobile ? () => setActiveDropdown(index) : undefined
              }
              onMouseLeave={
                !isMobile ? () => setActiveDropdown(null) : undefined
              }
              onClick={isMobile ? () => handleDropdownToggle(index) : undefined}
            >
              <Link to={menu.link || "#"}>{menu.title}</Link>

              {menu.sub.length > 0 && (
                <ul
                  className={`${styles.dropdown} ${
                    activeDropdown === index ? styles.active : ""
                  }`}
                >
                  {menu.sub.map((sub, subIndex) => (
                    <li key={subIndex} className={styles.dropdown_item}>
                      <Link to={sub.link || "#"}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* 언어 선택 드롭다운 */}
          <li className={styles.language_selector}>
            <button onClick={() => setLanguageOpen((prev) => !prev)}>
              {selectedLang}{" "}
              {languageOpen ? (
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <MdOutlineKeyboardArrowUp size={21} />
                </span>
              ) : (
                <span style={{ display: "inline-flex", alignItems: "center" }}>
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