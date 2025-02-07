import styles from './pageTitle.module.scss';

export default function PageTitle({ title, image }) {
  return (
    <div className={styles.title_img_container}>
      <img
        src={image ? image : "/jaka_collaborative_robot.png"}
        alt={title || "Page title image"}
      />
      <div className={styles.title_overlay}>{title}</div>
    </div>
  );
}
