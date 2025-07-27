import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PageTitle from "../../components/page_title/pageTitle";
import RobotCard from "../../components/card/robotCard";

import data from "../../data/series_data/sSeriesData";
import styles from "./sSeries.module.scss";

export default function SSeries() {
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기 (예: "kr", "en")
  const currentLang = i18n.language;

  // 언어별 이미지 경로 설정
  const imagePath =
    currentLang === "kr"
      ? "/assets/product_comparison/kr/jaka_s_product_comparison_kr.png"
      : "/assets/product_comparison/en/jaka_s_product_comparison_en.png";

  const featureDescription = t("jaka_s.feature_description", {
    returnObjects: true,
  });

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="page_title">
        <PageTitle title={t("jaka_s.page_title")} />
      </section>

      <section className="s">
        <div className={styles.page_subtitle}>
          <span>{t("jaka_s.page_subtitle")}</span>
        </div>

        <div className={styles.card_container}>
          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard
                key={item.id}
                series_name={item.series_name}
                series_img={item.series_img}
                i18nKey={item.i18nKey}
                type={`sseries`}
                onClick={() => nav(`/jaka/sseries/${item.url}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="major_feature">
        <div className={styles.major_title}>
          <span>{t("jaka_s.major_title")}</span>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_description}>
            {featureDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

          <div className={styles.feature_img}>
            <img src="/assets/jaka_s/jaka_s_cobot.png" alt="" />
          </div>
        </div>
      </section>

      <section className="product_comparison">
        <div className={styles.comparison_title}>
          <span>{t("jaka_s.comparison_title")}</span>
        </div>

        <div className={styles.comparison_img}>
          <img src={imagePath} alt="제품 비교 이미지" />
        </div>
      </section>
      <Footer />
    </>
  );
}
