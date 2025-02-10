import { useParams } from 'react-router-dom';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import styles from './zuSeriesPage.module.scss';
import zuSeriesData from '../../../data/zuSeriesData';
import zu3FeaturesData from '../../../data/features/zu3';

export default function ZuSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const zuData = zuSeriesData[idNumber];
  const zu3Data = zu3FeaturesData;

  return (
    <div className='zuseries_page'>
      <Header />
      <section className='detail_page_title'>
        <PageTitle title={zuData.pageTitle} />
      </section>

      <section className='detail_product_info'>
        <ProductInformation imgSrc={zuData.imgSrc} about={zuData.about} />
      </section>

      <section className='detail_product_spec'>
        <ProductSpecification
          name={zuData.name}
          basicImg={zuData.basicImg}
          commonImg={zuData.commonImg}
        />
      </section>

      <section className='detail_feature'>
        <div className={styles.detail_feature_title}>
          <p>{feature_title}</p>
        </div>

        <FeatureComponent features={zu3Data} />
      </section>

      <section className='detail_optimal_application_field'>
        <div className={styles.optimal_application_field_title}>
          <p>JAKA Zu 3의 최적 응용 분야</p>
        </div>
        <div className='field_list'>
          <ul className={styles.field_list}>
            <li>접착 및 결함</li>
            <li>전자 조립</li>
            <li>점검</li>
            <li>픽앤플레이스</li>
            <li>나사 드라이빙</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
