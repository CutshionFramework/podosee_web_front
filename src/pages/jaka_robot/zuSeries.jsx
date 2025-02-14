import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';
import VideoComponent from '../../components/video_component/videoComponent';

import data from '../../data/series_data/zuSeriesData';
import styles from './zuSeries.module.scss';

const videoAbout = [
  {
    video_title: 'JAKA Zu 협동로봇의 실제 작동 모습보기',
    video_description: [
      'JAKA Zu 와 함께라면 공장 자동화가 간단합니다.',
      '다양한 협동로봇 애플리케이션을 플러그 앤 플레이 방식으로 즉시 구현할 수 있습니다.',
    ],
    video_id: 'fBJENsNZZmY&t',
  },
];

export default function ZuSeriesPage() {
  const { t } = useTranslation();
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageSubT = t('jaka_zu.page_subtitle', { returnObjects: true });

  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={t('jaka_zu.page_title')} />
      </section>

      <section className='zu_series'>
        <div className={styles.page_subtitle}>
          {pageSubT.map((subtitle, index) => (
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
              onClick={() => nav(`/jaka/zuseries/${item.url}`)}
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

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{t('jaka_zu.comparison_title')}</span>
        </div>

        <div className={styles.comparison_img}>
          <img
            src='/assets/product_comparison/ko/jaka_zu_product_comparison_ko.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
