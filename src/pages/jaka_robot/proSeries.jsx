import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';

import data from '../../data/series_data/proSeriesData';
import styles from './proSeries.module.scss';

const pageTitle = 'JAKA Pro Collaborative Robots';

export default function ProSeries() {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={pageTitle} />
      </section>

      <section className='all_in_one'>
        <div className={styles.page_subtitle}>
          <p>
            오일, 먼지, 방수가 가능한 협동 로봇으로 제조 공정의 다양한 요구를
            해결하세요.
          </p>
        </div>

        <div className={styles.card_container}>
          <div className={styles.series_card}>
            {data.map((item) => (
              <RobotCard
                key={item.id}
                {...item}
                onClick={() => nav(`/jaka/proseries/${item.url}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='major_feature'>
        <div className={styles.major_title}>
          <p>JAKA Pro 협동로봇의 주요 특징</p>
        </div>

        <div className={styles.feature}>
          <div className={styles.feature_info}>
            <div className={styles.description}>
              JAKA Pro 협동로봇은 IP68 등급을 갖추고 있어 먼지, 작은 입자, 물,
              오일과 같은 액체로부터 완벽히 보호됩니다.
              <br />
              <br /> 이들은 사람이 견딜 수 없는 환경 즉 금속과 나무 조각, 먼지,
              바람 또는 비로 가득 차 있고 -10도에서 50도에 이르는
              <br /> 온도 범위에서 수년동안 쉬지 않고 작업할 수 있습니다.
              <br />
              <br /> 이 시리즈는 최대 1713mm의 작업 반경과 5~16kg의 탑재량을
              처리할 수 있는 협동로봇이 포함되어 있습니다.
            </div>
          </div>

          <div className={styles.feature_img}>
            <img src='/assets/jaka_pro/jaka_pro_cobot.png' alt='' />
          </div>
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.product_title}>
          <p>JAKA Pro 제품 비교</p>
        </div>

        <div className={styles.chart_img}>
          <img
            src='/assets/product_comparison/ko/jaka_pro_product_comparison_ko.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
