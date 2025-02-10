import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../apis/apis";
import NewsSlider from "../../components/news_slider/newsSlider";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./main.module.scss";

const PRODUCTS = [
  {
    id: 1,
    title: "자카",
    description: [
      "포도씨는 JAKA 로보틱스의 한국총판으로서, 사람의 팔로 하기 힘든 일들을 협동로봇으로",
      " 해결하기 위해 노력하고 있습니다.",
    ],
    image: "main_1.png",
    link: "/jaka",
  },
  {
    id: 2,
    title: "AI 키오스크",
    description: [
      "더 나은 일상과 비즈니스를 위한 스마트 솔루션.",
      "포토 키오스크부터 라면 자판기, 피버알람까지 다양한 솔루션을 한곳에서 만나보세요.",
    ],
    image: "main_2.png",
    link: "/integrated/aikiosk",
  },
  {
    id: 3,
    title: "AMR",
    description: [
      "효율적인 물류와 스마트한 작업 환경의 시작!",
      "함께 자동화의 속도를 높이세요.",
    ],
    image: "main_3.png",
    link: "/integrated/amr",
  },
];

const ProductCard = ({ title, description, image, link }) => (
  <div className={styles.product_card}>
    <div className={styles.image_container}>
      <img src={`/assets/main_page/${image}`} alt={title} />
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      {description.map((line, index) => (
        <p className={styles.description_p} key={index}>
          {line}
        </p>
      ))}
      <Link to={link} className={styles.learn_more}>
        Learn more &gt;
      </Link>
    </div>
  </div>
);

export default function Main() {
  const videoRef = useRef(null);
  const [newsData, setNewsData] = useState([]);

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
            <source src='/assets/main_page/home_main.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles.products_section}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>
      </div>

      <NewsSlider newsData={newsData}></NewsSlider>

      <Footer />
    </div>
  );
}
