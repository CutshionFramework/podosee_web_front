import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./main.module.scss";

const PRODUCTS = [
  {
    id: 1,
    title: "자카",
    description:
      "로보틱스 JAKA 코발트는 다목적협동로봇으로, 사람이 필요로 하는 작업을 정확하게 수행하는 지능형 코봇을 만듭니다.",
    image: "main_1.png",
    link: "/jaka",
  },
  {
    id: 2,
    title: "AI 키오스크",
    description:
      "디지털 월드와 어우러지는 무인 서비스 솔루션 코로나 시대에서부터 시작된 비대면 서비스에 대한 높은 수요로 인구해결을 담당합니다.",
    image: "main_2.png",
    link: "/integrated",
  },
  {
    id: 3,
    title: "AMR",
    description:
      "로봇이나 센서와 자율제어 자동 주행을 시행! AMR이 만들 자율화된 세상을 꿈꿉니다.",
    image: "main_3.png",
    link: "/integrated/amr",
  },
];

const ProductCard = ({ title, description, image, link }) => (
  <div className={styles.product_card}>
    <div className={styles.image_container}>
      <img src={`/src/assets/main_img/${image}`} alt={title} />
    </div>
    <div className={styles.content}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={link} className={styles.learn_more}>
        Learn more
      </Link>
    </div>
  </div>
);

export default function Main() {
  const videoRef = useRef(null);

  useEffect(() => {
    // 비디오 자동 재생 설정
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className={styles.main_container}>
      <Header />

      <section className={styles.main_section}>
        <video
          ref={videoRef}
          className={styles.main_video}
          loop
          muted
          playsInline
        >
          <source src='/src/assets/main_img/home_main.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={styles.products_section}>
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
