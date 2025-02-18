import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';

import PageTitle from '../../../components/page_title/pageTitle';
import ProductInformation from '../../../components/product/productInformation';
import ProductSpecification from '../../../components/product/productSpecification';
import FeatureComponent from '../../../components/feature_component/featureComponent';

import styles from './allInOneSeriesPage.module.scss';
import allInOneFeature from '../../../data/features/allInOne';

export default function AllInOneSeriesPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const idNumber = Number(id);

  // 🌟 번역 데이터 가져오기
  const pageTitle = t(`all_in_one_detail_pages.products.${idNumber}.pageTitle`);
  const imgSrc = t(`all_in_one_detail_pages.products.${idNumber}.imgSrc`, {
    defaultValue: '/default.jpg',
  });
  const about = t(`all_in_one_detail_pages.products.${idNumber}.about`, {
    returnObjects: true,
  });
  const name = t(`all_in_one_detail_pages.products.${idNumber}.name`);
  const basicImg = t(`all_in_one_detail_pages.products.${idNumber}.basicImg`);
  const commonImg = t(`all_in_one_detail_pages.products.${idNumber}.commonImg`);
  const featureTitle = t(
    `all_in_one_detail_pages.products.${idNumber}.feature_title`
  );
  const fieldTitle = t(
    `all_in_one_detail_pages.products.${idNumber}.field_title`
  );

  const features = allInOneFeature;

  // ID가 "3"이면 해당 데이터 사용, 그 외는 "default" 데이터 사용
  const applicationFields =
    id === '3'
      ? t(`all_in_one_detail_pages.application_fields.${id}`, {
          returnObjects: true,
          defaultValue: {},
        })
      : t('application_fields.default', {
          returnObjects: true,
          defaultValue: {},
        });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='zuseries_page'>
      <Header />
      <section className='detail_page_title'>
        <PageTitle title={pageTitle} />
      </section>

      <section className='detail_product_info'>
        <ProductInformation imgSrc={imgSrc} about={about} />
      </section>

      <section className='detail_product_spec'>
        <ProductSpecification
          name={name}
          basicImg={basicImg}
          commonImg={commonImg}
        />
      </section>

      <section className='detail_feature'>
        <div className={styles.detail_feature_title}>
          <span>{featureTitle}</span>
        </div>

        <FeatureComponent features={features} />
      </section>

      <section className='detail_optimal_application_field'>
        <div className={styles.optimal_application_field_title}>
          <span>{fieldTitle}</span>
        </div>
        <div className='field_list'>
          <ul className={styles.field_list}>
            {applicationFields.map((field, index) => (
              <li className={styles.list_item} key={index}>
                {field}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
