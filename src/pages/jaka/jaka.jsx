import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import VideoComponent from '../../components/video_component/videoComponent';
import RobotCard from '../../components/card/robotCard';
import data from '../../mock/series.json';

import styles from './jaka.module.scss';

export default function Jaka() {
  return (
    <>
      <Header />
      <div className='jaka'>
        <section className='page_title'>
          <PageTitle />
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

          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className='video_component'>
          <VideoComponent id='fBJENsNZZmY&t' />
        </section>

        <section className=''></section>
      </div>
      <Footer />
    </>
  );
}
