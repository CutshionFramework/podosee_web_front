import { Fragment } from 'react';

import styles from './robotCard.module.scss';

export default function RobotCard({
  series_name,
  series_img,
  series_description,
  onClick,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.series_name}>
        <span>{series_name}</span>
      </div>

      <div className={styles.series_img}>
        <img src={series_img} alt='' />
      </div>

      <div className={styles.series_description}>
        <span>
          {series_description.split('\n').map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </span>
      </div>

      <div className={styles.series_more} onClick={onClick}>
        <span>Learn more &nbsp;{'>'}</span>
      </div>
    </div>
  );
}
