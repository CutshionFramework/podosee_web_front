import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getNews } from "../../apis/apis";
import styles from "./news.module.scss";

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const sortedNews = [...newsData].sort((a, b) => b.seq - a.seq);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    window.scrollTo(0, 0);
    getNewsData();
  }, []);

  const getNewsData = async () => {
    const response = await getNews();
    setNewsData(response);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>최신 소식</h1>
        <div className={styles.news_container}>
          {sortedNews.map((news) => (
            <div key={news.seq} className={styles.news}>
              <div className={styles.news_content}>
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
      </div>
      <Footer />
    </div>
  );
}
