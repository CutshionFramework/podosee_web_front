import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './featureItem.module.scss';

export default function FeatureItem({ icon, i18nKey }) {
  const { t } = useTranslation();

  // 번역된 name 가져오기 및 기본값 설정
  const name = i18nKey
    ? t(`${i18nKey}.name`, { defaultValue: 'Feature Name' })
    : 'Feature Name';

  // 번역된 description 가져오기 및 기본값 설정
  const description = i18nKey
    ? t(`${i18nKey}.description`, {
        defaultValue: 'Feature description',
      })
    : 'Feature description';

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
          <span>{name}</span>
        </div>
        <div className={styles.feature_description}>
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
    </div>
  );
}
