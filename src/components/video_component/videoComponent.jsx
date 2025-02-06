import ReactPlayer from 'react-player';

import styles from './videoComponent.module.scss';

export default function VideoComponent() {
  // 해당 유튜브 영상 ID
  const videoID = 'fBJENsNZZmY&t';

  return (
    <div className={styles.video_component}>
      <section className={styles.video_about}>
        <div className={styles.about_title}>
          <p>JAKA 협동로봇의 실제 활용 사례</p>
        </div>

        <div className={styles.about_description}>
          3-20kg의 가반 하중, 넓은 작업 반경, 6관절 구성을 갖춘 JAKA 코봇은 수백
          개의 제조업체와 공장에서 자카코봇을 통해 시설을 자동화하는 데 도움이
          되었습니다. 자동차부터 물류, 전자에서 의료 제조에 이르기까지 다양한
          산업 분야에서 첨단 로봇 기술과 인간과 로봇의 자연스러운 상호작용을
          통해 이점을 누릴 수 있습니다
        </div>
      </section>
      <section className='video_thumbnail'>
        <div className={styles.video_thumbnail}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoID}`}
            width={560}
            height={315}
            controls
          />
        </div>
      </section>
    </div>
  );
}
