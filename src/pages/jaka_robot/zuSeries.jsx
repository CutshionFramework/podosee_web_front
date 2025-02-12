import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';
import VideoComponent from '../../components/video_component/videoComponent';

import data from '../../data/series_data/zuSeriesData';
import styles from './zuSeries.module.scss';

const titles = {
  pageTitle: 'JAKA Zu Collaborative Robots',
  pageSubtitle:
    'JAKA Zu 협동 로봇은 JAKA 의 최첨단 로봇 기술을 집약한 제품으로 토크피드백 충돌 감지 기능과 6축 설계를 결합하여\n 놀랍도록 안전하고 정확하며 지능적이고 안정적인 협동 로봇 시리즈입니다.',
  seriesTitle: 'JAKA Collaborative Robots Series',
  featureTitle: 'JAKA 협동로봇이 공장 자동화에 적합한 이유',
  comparisonTitle: 'JAKA Zu 제품 비교',
};

const videoAbout = [
  {
    title: 'JAKA Zu 협동로봇의 실제 작동 모습보기',
    description:
      'JAKA Zu 와 함께라면 공장 자동화가 간단합니다. \n다양한 협동 로봇 애플리케이션을 플러그 앤 플레이 방식으로 즉시 구현할 수 있습니다.',
    videoID: 'fBJENsNZZmY&t',
  },
];

export default function ZuSeriesPage() {
  const nav = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={titles.pageTitle} />
      </section>

      <section className='zu_series'>
        <div className={styles.page_subtitle}>
          <span>
            {titles.pageSubtitle.split('\n').map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </span>
        </div>

        <div className={styles.series_card}>
          {data.map((item) => (
            <RobotCard
              key={item.id}
              {...item}
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
              title={video.title}
              videoID={video.videoID}
              description={video.description}
            />
          ))}
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{titles.comparisonTitle}</span>
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
