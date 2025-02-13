import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import styles from './proSeriesPage.module.scss';
import proSeriesData from '../../../data/product_data/proSeriesProductData';
import proFeaturesData from '../../../data/features/pro';
import pro16FeaturesData from '../../../data/features/pro16';
import fieldListItemPro from '../../../data/optimal_application_field/fieldListItemPro';

export default function ProSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const seriesData = proSeriesData[idNumber];

  const proData = proFeaturesData;
  const pro16Data = pro16FeaturesData;

  const features = id === '16' ? pro16Data : proData; // id가 "16"이면 pro16Data, 아니면 proData

  const fieldListItem = fieldListItemPro;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='proseries_page'>
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
          <span>{seriesData.feature_title}</span>
        </div>

        <FeatureComponent features={features} />
      </section>

      <section className='detail_optimal_application_field'>
        <div className={styles.optimal_application_field_title}>
          <span>{seriesData.field_title}</span>
        </div>

        <div className='field_list'>
          <ul className={styles.field_list}>
            {fieldListItem.map((item) => (
              <li className={styles.list_item} key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
