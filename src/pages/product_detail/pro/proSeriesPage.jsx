import { useParams } from 'react-router-dom';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import styles from './proSeriesPage.module.scss';
import proSeriesData from '../../../data/proSeriesData';
import proFeaturesData from '../../../data/features/pro';
import pro16FeaturesData from '../../../data/features/pro16';

export default function ProSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const seriesData = proSeriesData[idNumber];

  const proData = proFeaturesData;
  const pro16Data = pro16FeaturesData;

  const features = id === '16' ? pro16Data : proData; // id가 "16"이면 pro16Data, 아니면 proData

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
