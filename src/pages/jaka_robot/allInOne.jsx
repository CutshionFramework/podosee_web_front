import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';

import data from '../../data/series_data/allInOneSeriesData';
import styles from './allInOne.module.scss';

export default function AllInOne() {
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기 (예: "ko", "en")
  const currentLang = i18n.language;

  // 언어별 이미지 경로 설정
  const imagePath =
    currentLang === 'ko'
      ? '/assets/product_comparison/ko/jaka_all_in_one_product_comparison_ko.png'
      : '/assets/product_comparison/en/jaka_all_in_one_product_comparison_en.png';

  const pageSubtitle = t('jaka_all_in_one.page_subtitle', {
    returnObjects: true,
  });

  const firstFeatureDescription = t(
    'jaka_all_in_one.first_feature_description',
    {
      returnObjects: true,
    }
  );

  const secondFeatureDescription = t(
    'jaka_all_in_one.second_feature_description',
    {
      returnObjects: true,
    }
  );

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={t('jaka_all_in_one.page_title')} />
      </section>

      <section className='all_in_one'>
        <div className={styles.page_subtitle}>
          {pageSubtitle.map((subTitle, index) => (
            <p key={index}>{subTitle}</p>
          ))}
        </div>

        <div className={styles.series_card}>
          {data.map((item) => (
            <RobotCard
              key={item.id}
              series_name={item.series_name}
              series_img={item.series_img}
              i18nKey={item.i18nKey}
              onClick={() => nav(`/jaka/allinone/${item.url}`)}
            />
          ))}
        </div>
      </section>

      <section className='major_feature'>
        <div className={styles.major_title}>
          <span>{t('jaka_all_in_one.major_title')}</span>
        </div>

        <div className={styles.first_feature}>
          <div className={styles.first_feature_info}>
            <div className={styles.first_feature_name}>
              <span>{t('jaka_all_in_one.first_feature_name')}</span>
            </div>
            <div className={styles.first_feature_description}>
              {firstFeatureDescription.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>

          <div className={styles.first_feature_img}>
            <img
              src='/assets/jaka_all_in_one/major_feature_1.png'
              alt=''
            />
          </div>
        </div>

        <div className={styles.second_feature}>
          <div className={styles.second_feature_img}>
            <img
              src='/assets/jaka_all_in_one/major_feature_2.png'
              alt=''
            />
          </div>

          <div className={styles.second_feature_info}>
            <div className={styles.second_feature_name}>
              <span>{t('jaka_all_in_one.second_feature_name')}</span>
            </div>

            <div className={styles.second_feature_description}>
              {secondFeatureDescription.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{t('jaka_all_in_one.comparison_title')}</span>
        </div>

        <div className={styles.comparison_img}>
          <img src={imagePath} alt='제품 비교 이미지' />
        </div>
      </section>
      <Footer />
    </>
  );
}
