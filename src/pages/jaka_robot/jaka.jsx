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
import styles from './jaka.module.scss';

const videoAbout = [
  {
    video_title: 'JAKA 협동로봇의 실제 활용 사례',
    video_description: [
      '3-20kg의 가반 하중, 넓은 작업 반경, 6관절 구성을 갖춘 JAKA 협동로봇은 자동차부터 물류, 전자에서 의료 제조에 이르기까지 다양한 산업 분야에서 첨단 로봇 기술과 인간과 로봇의 자연스러운 상호작용을 통해 이점을 누릴 수 있습니다.',
    ],
    video_id: 'zebaRutQwyU&t',
  },
];

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
            {videoAbout.map((video, index) => (
              <VideoComponent
                key={index}
                title={video.video_title}
                videoID={video.video_id}
                description={video.video_description}
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
