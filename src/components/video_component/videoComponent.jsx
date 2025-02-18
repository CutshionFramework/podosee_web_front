import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

import styles from './videoComponent.module.scss';

export default function VideoComponent({
  i18nKeyTitle,
  i18nKeyDescription,
  i18nKeyId,
}) {
  const { t } = useTranslation();

  // i18nKey를 이용하여 번역된 값 가져오기
  const videoId = i18nKeyId ? t(`${i18nKeyId}`) : '';
  const title = i18nKeyTitle ? t(`${i18nKeyTitle}`) : '';
  const description = [i18nKeyDescription ? t(`${i18nKeyDescription}`) : ''];

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
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width={560}
            height={315}
            controls
          />
        </div>
      </section>
    </div>
  );
}
