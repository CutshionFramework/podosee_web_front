import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";
import images from "../../constants/imagePath";
import routes from "../../constants/routes";
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();
  const error = t("error", { returnObjects: true });

  useEffect(() => {
    document.documentElement.style.paddingTop = "0";
    document.body.style.paddingTop = "0";

    return () => {
      // 화면 크기에 따라 적절한 padding-top 적용
      const updatePadding = () => {
        if (window.innerWidth <= 768) {
          document.body.style.paddingTop = "74px";
        } else if (window.innerWidth <= 1023) {
          document.body.style.paddingTop = "74px";
        } else {
          document.body.style.paddingTop = "124px";
        }
      };

      updatePadding(); // 초기 실행
      window.addEventListener("resize", updatePadding); // 화면 크기 변경 시 업데이트

      return () => {
        window.removeEventListener("resize", updatePadding); // 클린업
      };
    };
  }, []);

  return (
    <div className={styles.error_area}>
      <div className={styles.table}>
        <div className={styles.table_cell}>
          <div className={styles.container}>
            <div className={styles.error_content}>
              <img src={images.error} alt='Error' />
              <h3>{error.title}</h3>
              {error.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}

              <div className={styles.btn_box}>
                <Link to={routes.home} className={styles.default_btn}>
                  {error.back_button}
                </Link>
                <Link to={routes.home} className={styles.default_btn}>
                  {error.home_button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
