import { Fragment } from 'react';
import { useTranslation } from "react-i18next";

import styles from "./featureItem.module.scss";

export default function FeatureItem({ icon, i18nKey }) {
  const { t } = useTranslation();

  return (
    <div className={styles.feature_item}>
      {/* 아이콘 */}
      <section className='feature_icon'>
        <div className={styles.icon_wrapper}>
          <img src={icon} alt='' />
        </div>
      </section>

      {/* 설명 */}
      <section className='feature_info'>
        <div className={styles.feature_name}>
          <span>{t(`${i18nKey}.name`)}</span>
        </div>
        <div className={styles.feature_description}>
          <span>
            {t(`${i18nKey}.description`)
              .split("\n")
              .map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
          </span>
        </div>
      </section>
    </div>
  );
}
