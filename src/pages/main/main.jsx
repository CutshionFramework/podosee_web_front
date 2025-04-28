import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNews } from "../../apis/apis";
import NewsSlider from "../../components/news_slider/newsSlider";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import Popup from "../../components/popup/popup";

import styles from "./main.module.scss";
import images from "../../constants/imagePath";
import routes from "../../constants/routes";

const ProductCard = ({ title, description, idx }) => (
  <div className={styles.product_card}>
    <div className={styles.image_container}>
      <img src={images.main.main_image[idx]} alt={title} />
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      {description.map((line, index) => (
        <p className={styles.description_p} key={index}>
          {line}
        </p>
      ))}
      <Link to={routes.main_page_link[idx]} className={styles.learn_more}>
        Learn more &gt;
      </Link>
    </div>
  </div>
);

export default function Main() {
  const { t } = useTranslation();
  const products = t("main.products", { returnObjects: true });

  const videoRef = useRef(null);
  const [newsData, setNewsData] = useState([]);
  const sortedNews = [...newsData]
    .filter((news) => news.active === 0 || news.active === 1)
    .sort((a, b) => b.seq - a.seq);

  useEffect(() => {
    window.scrollTo(0, 0);

    getNewsData();

    // 비디오 자동 재생 설정
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const getNewsData = async () => {
    const response = await getNews();
    setNewsData(response);
  };

  return (
    <div className={styles.main_container}>
      {/* <Popup /> */}

      <Header />

      <div className={styles.main_section_container}>
        <section className={styles.main_section}>
          <video
            ref={videoRef}
            className={styles.main_video}
            loop
            muted
            playsInline
          >
            <source src={images.main.main_video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles.products_section}>
          {products.map((product, idx) => (
            <ProductCard
              key={`${product.id}-${product.name}-${idx}`}
              {...product}
              idx={idx}
            />
          ))}
        </section>
      </div>

      <NewsSlider newsData={sortedNews}></NewsSlider>

      <Footer />
    </div>
  );
}
