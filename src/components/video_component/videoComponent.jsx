import ReactPlayer from 'react-player';

import styles from './videoComponent.module.scss';

export default function VideoComponent({ title, description, videoID }) {
  // 해당 유튜브 영상 ID

  return (
    <div className={styles.video_component}>
      <section className={styles.video_about}>
        <div className={styles.about_title}>
          <p>{title}</p>
        </div>

        <div className={styles.about_description}>{description}</div>
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
