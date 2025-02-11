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
        <p>{series_name}</p>
      </div>

      <div className={styles.series_img}>
        <img src={series_img} alt='' />
      </div>

      <div className={styles.series_description}>
        <p>
          {series_description.split('\n').map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </div>

      <div className={styles.series_more} onClick={onClick}>
        <p>Learn more &nbsp;{'>'}</p>
      </div>
    </div>
  );
}
