import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import styles from "./main.module.scss";
const main_images = import.meta.glob("../../assets/main_img/*.png", {
  eager: true,
});
export default function Main() {
  return (
    <div>
      <Header />
      <div className={styles.temp}>메인</div>
      <div>
        {Object.values(main_images).map((img, index) => (
          <img key={index} src={img.default} alt={`Image ${index}`} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
