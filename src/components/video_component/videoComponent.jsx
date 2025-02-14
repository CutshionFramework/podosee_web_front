import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

import styles from './videoComponent.module.scss';

export default function VideoComponent({ title, description, videoID }) {
  return (
    <div className={styles.video_component}>
      <section className={styles.video_about}>
        <div className={styles.about_title}>
          <span>{title}</span>
        </div>

        <div className={styles.about_description}>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
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
