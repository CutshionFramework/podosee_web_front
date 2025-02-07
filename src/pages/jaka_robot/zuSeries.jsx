import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';
import VideoComponent from '../../components/video_component/videoComponent';

import data from '../../mock/zu_collaborative.json';
import styles from './zuSeries.module.scss';

const pageTitle = 'JAKA Zu Collaborative Robots';

const videoAbout = [
  {
    title: 'JAKA Zu 협동 로봇의 실제 작동 모습보기',
    description:
      'JAKA Zu 와 함께라면 공장 자동화가 간단합니다. 다양한 협동 로봇 애플리케이션을 플러그 앤 플레이 방식으로 즉시 구현할 수 있습니다.',
    videoID: 'fBJENsNZZmY&t',
  },
];

export default function ZuSeries() {
  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={pageTitle} />
      </section>

      <section className='zu_series'>
        <div className={styles.page_subtitle}>
          <p>
            JAKA Zu 협동 로봇은 JAKA 의 최첨단 로봇 기술을 집약한 제품으로 토크
            피드백 충돌 감지 기능과 6축 설계를 결합하여 <br />
            놀랍도록 안전하고 정확하며 지능적이고 안정적인 협동 로봇
            시리즈입니다.
          </p>
        </div>

        <div className={styles.card_container}>
          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className='video_component'>
        {videoAbout.map((video, index) => (
          <VideoComponent
            key={index}
            title={video.title}
            description={video.description}
            videoID={video.videoID}
          />
        ))}
      </section>

      <section className='product_comparison'>
        <div className={styles.product_title}>
          <p>JAKA Zu 제품 비교</p>
        </div>

        <div className={styles.chart_img}>
          <img
            src='/src/assets/product_comparison/jaka_zu_product_comparison.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
