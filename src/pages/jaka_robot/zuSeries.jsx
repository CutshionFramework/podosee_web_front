import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';
import VideoComponent from '../../components/video_component/videoComponent';

import data from '../../data/series_data/zuSeriesData';
import zuPageVideo from '../../data/video_about/zuPageVideo';
import styles from './zuSeries.module.scss';

export default function ZuSeriesPage() {
  const { t, i18n } = useTranslation();

  // 현재 언어 가져오기 (예: "kr", "en")
  const currentLang = i18n.language;

  // 언어별 이미지 경로 설정
  const imagePath =
    currentLang === 'kr'
      ? '/assets/product_comparison/kr/jaka_zu_product_comparison_kr.png'
      : '/assets/product_comparison/en/jaka_zu_product_comparison_en.png';

  const pageSubtitle = t('jaka_zu.page_subtitle', {
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
        <PageTitle title={t("jaka_zu.page_title")} />
      </section>

      <section className='zu_series'>
        <div className={styles.page_subtitle}>
          {pageSubtitle.map((subtitle, index) => (
            <p key={index}>{subtitle}</p>
          ))}
        </div>

        <div className={styles.series_card}>
          {data.map((item) => (
            <RobotCard
              key={item.id}
              series_name={item.series_name}
              series_img={item.series_img}
              i18nKey={item.i18nKey}
              type={`zuseries`}
              onClick={() => nav(`/jaka/zuseries/${item.url}`)}
            />
          ))}
        </div>
      </section>

      <section className='video_component'>
        <div className={styles.video}>
          {zuPageVideo.map((video, index) => (
            <VideoComponent
              key={index}
              i18nKeyId={video.i18nKeyId}
              i18nKeyTitle={video.i18nKeyTitle}
              i18nKeyDescription={video.i18KeyDescription}
            />
          ))}
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{t("jaka_zu.comparison_title")}</span>
        </div>

        <div className={styles.comparison_img}>
          <img src={imagePath} alt='제품 비교 이미지' />
        </div>
      </section>
      <Footer />
    </>
  );
}
