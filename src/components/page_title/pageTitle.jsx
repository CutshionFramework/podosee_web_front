import styles from './pageTitle.module.scss';

export default function PageTitle({ title }) {
  return (
    <div className={styles.title_img_container}>
      <img src='/jaka_collaborative_robot.png' alt='' />
      <div className={styles.title_overlay}>{title}</div>
    </div>
  );
}
