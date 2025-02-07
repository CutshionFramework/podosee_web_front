import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import ProductInformation from '../../components/product_info/productInformation';
import FeatureComponent from '../../components/feature_component/featureComponent';

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

        <div className='product_information'>
          <ProductInformation />
        </div>
      </section>

      <section className='feature_component'>
        <div className={styles.feature_title}>
          <p>JAKA MiniCobo의 주요 특징</p>
        </div>
        <FeatureComponent />
      </section>

      <section className='product_comparison'>
        <div className={styles.product_title}>
          <p>JAKA MiniCobo 제품 스펙</p>
        </div>

        <div className={styles.chart_img}>
          <img
            src='/src/assets/product_comparison/jaka_minicobo_product_comparison.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
