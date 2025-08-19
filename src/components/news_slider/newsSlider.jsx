import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import styles from "./newsSlider.module.scss";

const NewsSlider = ({ newsData }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sortedNews = [...newsData].sort((a, b) => b.id - a.id);

  // 화면 크기별로 보여줄 뉴스 개수 지정
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  // useCallback을 사용하여 함수 참조를 안정화
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      if (newIndex >= sortedNews.length) {
        return 0; // 처음으로 돌아가기
      }
      return newIndex;
    });
  }, [itemsPerPage, sortedNews.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      if (newIndex < 0) {
        // 마지막 페이지로 이동 (정확한 마지막 인덱스 계산)
        const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
        return (totalPages - 1) * itemsPerPage;
      }
      return newIndex;
    });
  }, [itemsPerPage, sortedNews.length]);

  // 뉴스 데이터가 변경되면 인덱스를 0으로 리셋
  useEffect(() => {
    setCurrentIndex(0);
  }, [newsData]);

  // 자동 슬라이드 효과
  useEffect(() => {
    // 뉴스가 itemsPerPage보다 적거나 같으면 자동 슬라이드 비활성화
    if (sortedNews.length <= itemsPerPage) {
      return;
    }

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext, sortedNews.length, itemsPerPage]);

  // 뉴스 데이터가 없으면 렌더링하지 않음
  if (sortedNews.length === 0) return null;

  // 현재 슬라이드에서 보여줄 뉴스들
  const visibleNews = sortedNews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={styles.news_slider}>
      <h1>{t("news_slider.title")}</h1>
      <div className={styles.slider_container}>
        {visibleNews.map((news) => (
          <div key={news.id} className={styles.slide}>
            <div className={styles.slide_content}>
              <a
                className={styles.image_container}
                href={news.news_link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={news.display_img} alt={news.title} />
              </a>
              <div className={styles.text_content}>
                <span className={styles.category}>{news.press_name}</span>
                <h2 className={styles.title}>
                  <a
                    href={news.news_link}
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

      {/* 뉴스가 itemsPerPage보다 많을 때만 네비게이션 버튼 표시 */}
      {sortedNews.length > itemsPerPage && (
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
      )}
    </div>
  );
};

export default NewsSlider;