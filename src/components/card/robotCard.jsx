import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import styles from "./robotCard.module.scss";

export default function RobotCard({
  series_name,
  series_img,
  i18nKey,
  onClick,
}) {
  const { t } = useTranslation();
  const descriptionList = t(`${i18nKey}.description`, { returnObjects: true });

  return (
    <div className={styles.card}>
      <div className={styles.series_name}>
        <span>{series_name}</span>
      </div>

      <div className={styles.series_img}>
        <img src={series_img} alt='' />
      </div>

      <div className={styles.series_description}>
        {descriptionList.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      <div className={styles.series_more} onClick={onClick}>
        <span>Learn more &nbsp;{">"}</span>
      </div>
    </div>
  );
}
