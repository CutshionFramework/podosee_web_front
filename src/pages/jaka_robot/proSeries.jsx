import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';

import data from '../../data/series_data/proSeriesData';
import styles from './proSeries.module.scss';

export default function ProSeries() {
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기 (예: "ko", "en")
  const currentLang = i18n.language;

  // 언어별 이미지 경로 설정
  const imagePath =
    currentLang === 'ko'
      ? '/assets/product_comparison/ko/jaka_pro_product_comparison_ko.png'
      : '/assets/product_comparison/en/jaka_pro_product_comparison_en.png';

  const featureDescription = t('jaka_pro.feature_description', {
    returnObjects: true,
  });

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={t('jaka_pro.page_title')} />
      </section>

      <section className='all_in_one'>
        <div className={styles.page_subtitle}>
          <span>{t('jaka_pro.page_subtitle')}</span>
        </div>

        <div className={styles.card_container}>
          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard
                key={item.id}
                series_name={item.series_name}
                series_img={item.series_img}
                i18nKey={item.i18nKey}
                onClick={() => nav(`/jaka/proseries/${item.url}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='major_feature'>
        <div className={styles.major_title}>
          <span>{t('jaka_pro.major_title')}</span>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_description}>
            {featureDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>

          <div className={styles.feature_img}>
            <img src='/assets/jaka_pro/jaka_pro_cobot.png' alt='' />
          </div>
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{t('jaka_pro.comparison_title')}</span>
        </div>

        <div className={styles.comparison_img}>
          <img src={imagePath} alt='제품 비교 이미지' />
        </div>
      </section>
      <Footer />
    </>
  );
}
