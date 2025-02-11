import { useParams } from 'react-router-dom';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import zuSeriesData from '../../../data/product_data/zuSeriesProductData';
import zu3FeaturesData from '../../../data/features/zu3';
import zu5FeaturesData from '../../../data/features/zu5';

import styles from './zuSeriesPage.module.scss';

export default function ZuSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const seriesData = zuSeriesData[idNumber];

  const features = id === '5' ? zu5FeaturesData : zu3FeaturesData; // id가 "5"이면 zu5Data, 아니면 zu3Data

  return (
    <div className='zuseries_page'>
      <Header />
      <section className='detail_page_title'>
        <PageTitle title={seriesData.pageTitle} />
      </section>

      <section className='detail_product_info'>
        <ProductInformation
          imgSrc={seriesData.imgSrc}
          about={seriesData.about}
        />
      </section>

      <section className='detail_product_spec'>
        <ProductSpecification
          name={seriesData.name}
          basicImg={seriesData.basicImg}
          commonImg={seriesData.commonImg}
        />
      </section>

      <section className='detail_feature'>
        <div className={styles.detail_feature_title}>
          <p>{seriesData.feature_title}</p>
        </div>

        <FeatureComponent features={features} />
      </section>

      <section className='detail_optimal_application_field'>
        <div className={styles.optimal_application_field_title}>
          <p>{seriesData.field_title}</p>
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
