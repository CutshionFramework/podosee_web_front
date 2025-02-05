import FeatureItem from './featureItem';
import styles from './featureComponent.module.scss';

export default function FeatureComponent() {
  return (
    <div className={styles.feature_component}>
      <div className={styles.feature_title}>
        <p>JAKA 협동로봇이 공장 자동화에 적합한 이유</p>
      </div>

      <div className={styles.feature_items}>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  );
}
