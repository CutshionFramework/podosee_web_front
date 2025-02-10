import styles from './productInformation.module.scss';

export default function ProductInformation() {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_info}>
        <section className='product_img'>
          <div className={styles.product_img}>
            <img src='/assets/jaka_minicobo/minicobo_use_case.png' alt='' />
          </div>
        </section>
        <section className='product_about'>
          <div className={styles.product_about}>
            JAKA MiniCobo는 컴팩트하고 부드러운 모양으로 심플하게 디자인
            되었으며, 직관적으로 조작할 수 있고
            <br /> 소음이 거의 없으며 가격 대비 성능이 우수한 제품입니다.
            <br />
            <br /> 통합 지능형 드라이브 모듈을 사용하여 뛰어난 성능을 유지하면서
            경량화된 설계를 구현합니다.
            <br /> 또한 풍부한 2차 개발 인터페이스를 통해 고객에게 다양한
            상황에서 더 많은 선택지를 제공합니다.
            <br />
            <br /> JAKA MiniCobo는 작은 외관, 간단하고 직관적인 조작, 저소음 및
            고비용 성능을 갖추고 있습니다.
            <br /> 특히 소비, 서비스, 교육 등 다양한 분야에 적합합니다.{' '}
          </div>
        </section>
      </div>
    </div>
  );
}
