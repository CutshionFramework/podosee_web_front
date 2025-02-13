import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import VideoComponent from '../../components/video_component/videoComponent';
import RobotCard from '../../components/card/robotCard';
import FeatureComponent from '../../components/feature_component/featureComponent';

import jakaProducts from '../../data/features/jakaProducts';
import data from '../../data/series_data/jakaMainSeriesData';
import styles from './jaka.module.scss';

const titles = {
  pageTitle: 'JAKA Collaborative Robots',
  pageSubtitle:
    'JAKA 협동 로봇은 여러 산업 분야의 자동화 생산에 성공적으로 적용되어 지속적이고 강력한 장비 기반을 갖춘 산업 분야에 혁신을 제공하고 있습니다.',
  seriesTitle: 'JAKA Collaborative Robots Series',
  featureTitle: 'JAKA 협동로봇이 공장 자동화에 적합한 이유',
};

const videoAbout = [
  {
    title: 'JAKA 협동로봇의 실제 활용 사례',
    description:
      '3-20kg의 가반 하중, 넓은 작업 반경, 6관절 구성을 갖춘 JAKA 협동로봇은 자동차부터 물류,\n 전자에서 의료 제조에 이르기까지 다양한 산업 분야에서 첨단 로봇 기술과 인간과 로봇의 자연스러운 상호작용을\n 통해 이점을 누릴 수 있습니다.',
    videoID: 'zebaRutQwyU&t',
  },
];

export default function Jaka() {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className='jaka'>
        <section className='page_title'>
          <PageTitle title={titles.pageTitle} />
        </section>

        <section className='jaka_series'>
          <div className={styles.page_subtitle}>
            <span>{titles.pageSubtitle}</span>
          </div>

          <div className={styles.series_title}>
            <span>{titles.seriesTitle}</span>
          </div>

          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard
                key={item.id}
                {...item}
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
                title={video.title}
                description={video.description}
                videoID={video.videoID}
              />
            ))}
          </div>
        </section>

        <section className='feature_component'>
          <div className={styles.feature_title}>
            <span>{titles.featureTitle}</span>
          </div>
          <FeatureComponent features={jakaProducts} />
        </section>
      </div>
      <Footer />
    </>
  );
}
