import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';

import FeatureComponent from '../../components/feature_component/featureComponent';

import jakaProducts from '../../data/features/jakaProducts';
import styles from './minicobo.module.scss';

export default function Minicobo() {
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기 (예: "kr", "en")
  const currentLang = i18n.language;

  // 언어별 이미지 경로 설정
  const imagePath =
    currentLang === 'kr'
      ? '/assets/product_comparison/kr/jaka_minicobo_product_comparison_kr.png'
      : '/assets/product_comparison/en/jaka_minicobo_product_comparison_en.png';

  const aboutList = t('jaka_minicobo.about', { returnObjects: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <section className='page_title'>
        <PageTitle title={t("jaka_minicobo.page_title")} />
      </section>

      <section className='minicobo'>
        <div className={styles.page_subtitle}>
          <span>{t("jaka_minicobo.page_subtitle")}</span>
        </div>

        <section className='minicobo_information'>
          <div className={styles.product_container}>
            <div className={styles.product_info}>
              <section className={styles.product_img_section}>
                <div className={styles.product_img}>
                  <img
                    src='/assets/jaka_minicobo/minicobo.webp'
                    alt='제품 이미지'
                  />
                </div>
              </section>

              <section className={styles.product_about_section}>
                <div className={styles.product_about}>
                  {aboutList.map((about, index) => (
                    <p key={index}>{about}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{t("jaka_minicobo.comparison_title")}</span>
        </div>

        <div className={styles.comparison_img}>
          <img src={imagePath} alt='제품 비교 이미지' />
        </div>
      </section>

      <section className='feature_component'>
        <div className={styles.feature_title}>
          <span>{t("jaka_minicobo.feature_title")}</span>
        </div>
        <FeatureComponent features={jakaProducts} />
      </section>

      <Footer />
    </>
  );
}
