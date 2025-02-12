import ReactPlayer from 'react-player';
import { Fragment } from 'react';

import styles from './videoComponent.module.scss';

export default function VideoComponent({ title, description, videoID }) {
  // 해당 유튜브 영상 ID

  return (
    <div className={styles.video_component}>
      <section className={styles.video_about}>
        <div className={styles.about_title}>
          <span>{title}</span>
        </div>

        <div className={styles.about_description}>
          <span>
            {description.split('\n').map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </span>
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
