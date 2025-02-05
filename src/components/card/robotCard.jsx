import styles from './robotCard.module.scss';

export default function RobotCard({
  series_name,
  series_img,
  series_description,
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
        <p>{series_description}</p>
      </div>

      <div className={styles.series_more}>
        <p>Learn more &nbsp;{'>'}</p>
      </div>
    </div>
  );
}
