import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styles from "./newsSlider.module.scss";

const NewsSlider = ({ newsData }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sortedNews = [...newsData].sort((a, b) => b.seq - a.seq);

  // 화면 크기별로 보여줄 뉴스 개수 지정
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  // itemsPerPage를 동적으로 변경
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5초마다 슬라이드

    return () => clearInterval(interval);
  }, [currentIndex, newsData]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(sortedNews.length - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= sortedNews.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  return (
    <div className={styles.news_slider}>
      <h1>{t("news_slider.title")}</h1>
      <div className={styles.slider_container}>
        {sortedNews
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((news) => (
            <div key={news.seq} className={styles.slide}>
              <div className={styles.slide_content}>
                <div className={styles.image_container}>
                  <img src={news.img} alt={news.title} />
                </div>
                <div className={styles.text_content}>
                  <span className={styles.category}>{news.press}</span>
                  <h2 className={styles.title}>
                    <a
                      href={news.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {news.title}
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.navigation}>
        <button
          className={`${styles.nav_button} ${styles.prev}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className={`${styles.nav_button} ${styles.next}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
