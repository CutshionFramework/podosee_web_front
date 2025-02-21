import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getNews } from "../../apis/apis";
import styles from "./news.module.scss";

export default function News() {
  const { t } = useTranslation();
  const [newsData, setNewsData] = useState([]);
  const sortedNews = [...newsData].sort((a, b) => b.seq - a.seq);

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
        <h1>{t("news.title")}</h1>
        <div className={styles.news_container}>
          {sortedNews.map((news) => (
            <div key={news.seq} className={styles.news}>
              <div className={styles.news_content}>
                <a
                  className={styles.image_container}
                  href={news.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={news.img} alt={news.title} />
                </a>
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
