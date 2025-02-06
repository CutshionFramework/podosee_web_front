import { Fragment } from 'react';

import styles from './featureItem.module.scss';

export default function FeatureItem({ icon, name, description }) {
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
          <p>{name}</p>
        </div>
        <div className={styles.feature_description}>
          {description.split('\n').map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
