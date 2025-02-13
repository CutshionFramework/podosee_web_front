import { useEffect } from 'react';
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
import fieldListItemZu from '../../../data/optimal_application_field/fieldListItemZu';
import fieldListItemZu3 from '../../../data/optimal_application_field/fieldListItemZu3';

import styles from './zuSeriesPage.module.scss';

export default function ZuSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const seriesData = zuSeriesData[idNumber];

  const features = id === '5' ? zu5FeaturesData : zu3FeaturesData; // id가 '5'이면 zu5Data, 아니면 zu3Data

  const fieldListItem = id === '3' ? fieldListItemZu3 : fieldListItemZu; // id가 '3'이면 fieldListItemZu3, fieldListItemZu

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
