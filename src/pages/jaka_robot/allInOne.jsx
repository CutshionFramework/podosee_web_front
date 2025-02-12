import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import RobotCard from '../../components/card/robotCard';

import data from '../../data/series_data/allInOneSeriesData';
import styles from './allInOne.module.scss';

const titles = {
  pageTitle: 'JAKA All-in-one Collaborative Robots',
  pageSubtitle:
    '제조업체의 산업 및 공장 자동화를 지원하도록 설계된 JAKA All-in-one 협동로봇을 소개합니다.\n 3~18kg의 가반하중과 통합 2D 렌즈를 갖춘 JAKA All-in-one 협동로봇은 3C 전자, 자동차, 첨단 제조, 물류 등 다양한 산업에 이상적입니다.',
  majorTitle: 'JAKA All-in-one 협동로봇의 주요 특징',
  firstFeatureName: '통합 비전 시스템',
  firstFeatureDescription:
    'JAKA All-in-one 협동로봇은 무선 티칭 및 그래픽 프로그래밍과 함께 시각적 피드백이 제공됩니다.\n 카메라를 활용하는 시스템으로 정밀성과 안정성을 보장하는 동시에 협동로봇이 할당할 수 있는 작업 범위를 상당히 확대 합니다. \n\nJAKA Lens 2D는 협동로봇의 끝에 고정하거나 장착할 수 있으며, 고품질 렌즈와 특수 광원 모듈을 갖추고 있어 사용자에게 완전한\n 기능성과 2D 비전 경험을 제공합니다.',
  secondFeatureName: 'MiniCab',
  secondFeatureDescription:
    'MiniCab 컨트롤러 덕분에 모든 JAKA All-in-one 협동로봇은 AGV에 장착되어도 완벽히 조화를 이룹니다. \n 협동 로봇과 AGV는 각각 매우 유용한 장비입니다.\n 특히 인간의 개입 없이도 AGV와 협동 로봇의 조합은 창고 관리 및 검사 작업을 독립적으로 수행할 수 있습니다.',
  comparisonTitle: 'JAKA All-in-one 제품 비교',
};

export default function AllInOne() {
  const nav = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Header />
      <section className='page_title'>
        <PageTitle title={titles.pageTitle} />
      </section>

      <section className='all_in_one'>
        <div className={styles.page_subtitle}>
          <span>
            {titles.pageSubtitle.split('\n').map((line, index) => (
              <Fragment key={index}>
                {line}
                <br />
              </Fragment>
            ))}
          </span>
        </div>

        <div className={styles.series_card}>
          {data.map((item) => (
            <RobotCard
              key={item.id}
              {...item}
              onClick={() => nav(`/jaka/allinone/${item.url}`)}
            />
          ))}
        </div>
      </section>

      <section className='major_feature'>
        <div className={styles.major_title}>
          <span>{titles.majorTitle}</span>
        </div>

        <div className={styles.first_feature}>
          <div className={styles.first_feature_info}>
            <div className={styles.first_feature_name}>
              <span>{titles.firstFeatureName}</span>
            </div>
            <div className={styles.first_feature_description}>
              <span>
                {titles.firstFeatureDescription
                  .split('\n')
                  .map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
              </span>
            </div>
          </div>

          <div className={styles.first_feature_img}>
            <img src='/assets/jaka_all_in_one/major_feature_1.png' alt='' />
          </div>
        </div>

        <div className={styles.second_feature}>
          <div className={styles.second_feature_img}>
            <img src='/assets/jaka_all_in_one/major_feature_2.png' alt='' />
          </div>

          <div className={styles.second_feature_info}>
            <div className={styles.second_feature_name}>
              <span>{titles.secondFeatureName}</span>
            </div>

            <div className={styles.second_feature_description}>
              <span>
                {titles.secondFeatureDescription
                  .split('\n')
                  .map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='product_comparison'>
        <div className={styles.comparison_title}>
          <span>{titles.comparisonTitle}</span>
        </div>

        <div className={styles.comparison_img}>
          <img
            src='/assets/product_comparison/ko/jaka_all_in_one_product_comparison_ko.png'
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
