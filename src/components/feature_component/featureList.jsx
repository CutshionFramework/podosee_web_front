import FeatureItem from './featureItem';

import styles from './featureList.module.scss';

export default function FeatureList({ features }) {
  return (
    <div className={styles.feature_items}>
      {features.map((item) => (
        <FeatureItem
          key={item.id}
          icon={item.icon}
          i18nKey={item.i18nKey}
        />
      ))}
    </div>
  );
}
