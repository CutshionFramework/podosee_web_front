import styles from './featureComponent.module.scss';
import FeatureList from './featureList';

export default function FeatureComponent({ features }) {
  return (
    <div className={styles.feature_component}>
      <FeatureList features={features} />
    </div>
  );
}
