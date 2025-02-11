import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';

import FeatureComponent from '../../components/feature_component/featureComponent';

import jakaProducts from '../../data/features/jakaProducts';
import styles from './minicobo.module.scss';

const pageTitle = 'JAKA MiniCobo';

export default function Jaka() {
  return (
    <>
      <Header />

      <section className='page_title'>
        <PageTitle title={pageTitle} />
      </section>

      <section className='minicobo'>
        <div className={styles.page_subtitle}>
          <p>
            경량화 설계를 하면서도 배치가 쉽고 성능도 뛰어나고 높은 가성비를
            확보합니다.
          </p>
        </div>

        <section className='product_information'>
          <div className={styles.minicobo_info}>
            <div className={styles.minicobo_img}>
              <img
                src='../../../public/assets/jaka_minicobo/minicobo_use_case.png'
                alt=''
              />
            </div>

            <div className={styles.minicobo_about}>
              JAKA MiniCobo는 컴팩트하고 부드러운 모양으로 심플하게 디자인
              되었으며, 직관적으로 조작할 수 있고
              <br /> 소음이 거의 없으며 가격 대비 성능이 우수한 제품입니다.
              <br />
              <br /> 통합 지능형 드라이브 모듈을 사용하여 뛰어난 성능을
              유지하면서 경량화된 설계를 구현합니다.
              <br /> 또한 풍부한 2차 개발 인터페이스를 통해 고객에게 다양한
              상황에서 더 많은 선택지를 제공합니다.
              <br />
              <br /> JAKA MiniCobo는 작은 외관, 간단하고 직관적인 조작, 저소음
              및 고비용 성능을 갖추고 있습니다.
              <br /> 특히 소비, 서비스, 교육 등 다양한 분야에 적합합니다.{' '}
            </div>
          </div>
        </section>
      </section>

      <section className='feature_component'>
        <div className={styles.feature_title}>
          <p>JAKA MiniCobo의 주요 특징</p>
        </div>
        <FeatureComponent features={jakaProducts} />
      </section>

      <section className='product_comparison'>
        <div className={styles.product_title}>
          <p>JAKA MiniCobo 제품 스펙</p>
        </div>

        <div className={styles.chart_img}>
          <img
            src='/assets/product_comparison/ko/jaka_minicobo_product_comparison_ko.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
