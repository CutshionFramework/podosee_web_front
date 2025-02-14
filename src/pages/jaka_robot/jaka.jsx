import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import VideoComponent from '../../components/video_component/videoComponent';
import RobotCard from '../../components/card/robotCard';
import FeatureComponent from '../../components/feature_component/featureComponent';

import jakaProducts from '../../data/features/jakaProducts';
import data from '../../data/series_data/jakaMainSeriesData';
import jakaPageVideo from '../../data/video_about/jakaPageVideo';
import styles from './jaka.module.scss';

export default function Jaka() {
  const { t } = useTranslation();

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='jaka'>
        <section className='page_title'>
          <PageTitle title={t('jaka.page_title')} />
        </section>

        <section className='jaka_series'>
          <div className={styles.page_subtitle}>
            <span>{t('jaka.page_subtitle')}</span>
          </div>

          <div className={styles.series_title}>
            <span>{t('jaka.series_title')}</span>
          </div>

          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard
                key={item.id}
                series_name={item.series_name}
                series_img={item.series_img}
                i18nKey={item.i18nKey}
                onClick={() => nav(`/jaka/${item.url}`)}
              />
            ))}
          </div>
        </section>

        <section className='video_component'>
          <div className={styles.video}>
            {jakaPageVideo.map((video, index) => (
              <VideoComponent
                key={index}
                i18nKeyId={video.i18nKeyId}
                i18nKeyTitle={video.i18nKeyTitle}
                i18nKeyDescription={video.i18KeyDescription}
              />
            ))}
          </div>
        </section>

        <section className='feature_component'>
          <div className={styles.feature_title}>
            <span>{t('jaka.feature_title')}</span>
          </div>
          <FeatureComponent features={jakaProducts} />
        </section>
      </div>
      <Footer />
    </>
  );
}
