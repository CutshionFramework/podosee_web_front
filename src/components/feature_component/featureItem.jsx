import styles from './featureItem.module.scss';

export default function FeatureItem() {
  return (
    <div className={styles.feature_item}>
      {/* 아이콘 */}
      <section className='feature_icon'>
        <div className={styles.icon_wrapper}>
          <img src='/src/assets/feature_icons/remote_monitoring.png' alt='' />
        </div>
      </section>

      {/* 설명 */}
      <section className='feature_info'>
        <div className={styles.feature_info}>
          <div className={styles.feature_name}>
            <p>원격 모니터링</p>
          </div>
          <div className={styles.feature_description}>
            <p>
              독특한 보안 인증 시스템으로 코봇의 작업을 모니터링하고 알림을
              설정합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
