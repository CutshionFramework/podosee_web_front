import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import VideoComponent from '../../components/video_component/videoComponent';
import RobotCard from '../../components/card/robotCard';
import FeatureComponent from '../../components/feature_component/featureComponent';

import data from '../../mock/series.json';
import styles from './jaka.module.scss';

const title = 'JAKA Collaborative Robots';

export default function Jaka() {
  return (
    <>
      <Header />
      <div className='jaka'>
        <section className='page_title'>
          <PageTitle title={title} />
        </section>

        <section className='jaka_series'>
          <div className={styles.page_subtitle}>
            <p>
              JAKA 협동 로봇은 여러 산업 분야의 자동화 생산에 성공적으로
              적용되어 지속적이고 강력한 장비 기반을 갖춘 산업 분야에 혁신을
              제공하고 있습니다.
            </p>
          </div>

          <div className={styles.series_title}>
            <p>JAKA Collaborative Robots Series</p>
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
          <VideoComponent />
        </section>

        <section className='feature_component'>
          <div className={styles.feature_title}>
            <p>JAKA 협동로봇이 공장 자동화에 적합한 이유</p>
          </div>
          <FeatureComponent />
        </section>
      </div>
      <Footer />
    </>
  );
}
