import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import styles from './allInOneSeriesPage.module.scss';
import allInOneSeriesData from '../../../data/product_data/allInOneSeriesProductData';
import allInOneFeature from '../../../data/features/allInOne';
import fieldListItemAllInOne from '../../../data/optimal_application_field/fieldListItemAllInOne';
import fieldListItemAllInOne3 from '../../../data/optimal_application_field/fieldListItemAllInOne3';

export default function AllInOneSeriesPage() {
  const { id } = useParams();
  const idNumber = Number(id);

  const seriesData = allInOneSeriesData[idNumber];

  const features = allInOneFeature;

  const fieldListItem =
    id === '3' ? fieldListItemAllInOne3 : fieldListItemAllInOne; // id가 '3'이면 fieldListItemAllInOne3, fieldListItemAllInOne

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
