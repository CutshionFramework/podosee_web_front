import styles from './pageTitle.module.scss';

export default function PageTitle() {
  return (
    <div className={styles.title_img_container}>
      <img src='/jaka_collaborative_robot.png' alt='' />
      <div className={styles.title_overlay}>JAKA Collaborative Robots</div>
    </div>
  );
}
