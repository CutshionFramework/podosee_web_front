import styles from './featureComponent.module.scss';
import FeatureList from './featureList';

const features = [
  {
    id: 1,
    icon: '/assets/feature_icons/remote_monitoring.png',
    name: '원격 모니터링',
    description:
      '독특한 보안 인증 시스템으로\n코봇의 작업을 모니터링하고 \n알림을 설정합니다.',
  },
  {
    id: 2,
    icon: '/assets/feature_icons/wireless_connection.png',
    name: '무선 연결',
    description:
      '복잡한 선 없이 깨끗하고 \n안전한 공간을 \nJAKA 협동로봇이 함께합니다.',
  },
  {
    id: 3,
    icon: '/assets/feature_icons/drag_teaching.png',
    name: '드래그 티칭',
    description:
      '손쉬운 드래그 티칭과 \n높은 기동성을 제공하는 \n6개 관절 덕분에 \n어떤 위치로든 옮기기만 하면 \n즉시 기억합니다.',
  },
  {
    id: 4,
    icon: '/assets/feature_icons/none_teachpendant.png',
    name: '티칭 펜던트 없음',
    description:
      'JAKA 앱은 태블릿, 스마트폰, \nPC에서 사용 가능합니다. \n쉽고 간편하게 협동로봇을 \n가르쳐보세요.',
  },
  {
    id: 5,
    icon: '/assets/feature_icons/graphic_programming.png',
    name: '그래팩 프로그래밍',
    description:
      '직관적인 그래픽 프로그래밍 소프트웨어는 \n프로그래밍 경험이 전혀 필요하지 않습니다. \n누구나 쉽게 위치와 작업을 설정하고 \n조정할 수 있습니다.',
  },
];

export default function FeatureComponent() {
  return (
    <div className={styles.feature_component}>
      <FeatureList features={features} />
    </div>
  );
}
