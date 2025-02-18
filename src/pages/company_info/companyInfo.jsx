import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageTitle from '../../components/page_title/pageTitle';
import MenuTab from '../../components/menu_tab/menuTab'; // 추가
import styles from './companyInfo.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPartner, getHistory } from '../../apis/apis';
import { useTranslation } from 'react-i18next';
import images from '../../constants/imagePath';

export default function CompanyInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [partnerData, setPartnerData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: t('company.menu.greeting'), path: 'greeting' },
    { name: t('company.menu.history'), path: 'history' },
    { name: t('company.menu.location'), path: 'location' },
    { name: t('company.menu.partners'), path: 'partners' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    getHistoryData();
    getPartnerData();
  }, []);

  useEffect(() => {
    if (id === 'greeting') {
      setCurrentTab(0);
    } else if (id === 'history') {
      setCurrentTab(1);
    } else if (id === 'location') {
      setCurrentTab(2);
    } else if (id === 'partners') {
      setCurrentTab(3);
    }
    window.scrollTo(0, 0);
  }, [id]);

  const getPartnerData = async () => {
    const response = await getPartner();
    if (response.result === 0) {
      setPartnerData(response.data.filter((el) => el.status === 2));
    }
  };

  const getHistoryData = async () => {
    const response = await getHistory();
    if (response.result === 0) {
      setHistoryData(response.data);
    }
  };

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    navigate(`/company/${menuArr[index].path}`); // URL 변경
  };

  return (
    <div>
      <Header />
      <PageTitle title={t('company.title')} />
      <div className={styles.company_info_container}>
        <MenuTab
          menuArr={menuArr}
          currentTab={currentTab}
          onSelect={selectMenuHandler}
        />

        <div>{currentTab === 0 ? <CeoGreeting /> : null}</div>
        <div>
          {currentTab === 1 ? <History historyData={historyData} /> : null}
        </div>
        <div className={styles.location_div}>
          {currentTab === 2 ? <Location /> : null}
        </div>
        <div className={styles.partner_div}>
          {currentTab === 3 ? <Partners partnerData={partnerData} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const CeoGreeting = () => {
  const { t } = useTranslation();
  const greetings = t('company.greeting', { returnObjects: true });

  return (
    <div className={styles.ceo_greeting}>
      <h3>
        <strong>{greetings.item1}</strong>
      </h3>
      <p>{greetings.item2}</p>
      <p>{greetings.item3}</p>
      <p>{greetings.item4}</p>
      <p className={styles.highlight}>{greetings.item5}</p>
      <p>{greetings.item6}</p>
      <p>{greetings.item7}</p>
      <p>{greetings.item8}</p>
      <p>{greetings.item9}</p>
      <p className={styles.p_margin}>{greetings.item10}</p>
      <p className={styles.p_margin_botton}>{greetings.item11}</p>
      <p>{greetings.item12}</p>
    </div>
  );
};

const History = ({ historyData }) => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.history_container}>
      {Object.keys(historyData)
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className={styles.year}>
            {year}
            <div>
              {Object.keys(historyData[year])
                .sort((a, b) => b - a)
                .map((month) => (
                  <div key={month} className={styles.month}>
                    <span className={styles.month_name}>
                      {i18n.language === 'kr' ? `${month}월` : `${month}`}
                    </span>
                    <div className={styles.activity_list}>
                      {historyData[year][month][i18n.language]?.map(
                        (activity, index) => (
                          <div key={index} className={styles.activity_item}>
                            {activity}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

const Location = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.location_container}>
      <iframe src={images.google_map} allowFullScreen></iframe>
      <div className={styles.location_info}>
        <span className={styles.address}>{t('company.location')}</span>
        <span className={styles.tel}>Tel 070-8959-2960</span>
      </div>
    </div>
  );
};

const Partners = ({ partnerData }) => {
  const { i18n } = useTranslation();

  const typeTranslation = {
    대리점: { kr: '대리점', en: 'Agency' },
    관공서: { kr: '관공서', en: 'Government' },
    '국내 기업': { kr: '국내 기업', en: 'Domestic Company' },
    '해외 기업': { kr: '해외 기업', en: 'Overseas Company' },
  };

  const groupedPartners = partnerData.reduce((acc, con) => {
    const translatedType = typeTranslation[con.type] || con.type; // Fetch type translations
    if (!acc[translatedType[i18n.language]]) {
      acc[translatedType[i18n.language]] = [];
    }
    acc[translatedType[i18n.language]].push(con);
    return acc;
  }, {});

  return (
    <div className={styles.partners_container}>
      {Object.entries(groupedPartners).map(([type, partners]) => (
        <div key={type} className={styles.partner_group}>
          <h2>{type}</h2>
          {/* <h2>{t(`company.partners.${type}`)}</h2> */}
          <div className={styles.partner_list}>
            {partners.map((con, i) => (
              <div key={i} className={styles.partner_card}>
                <a href={con.url[0]} target='_blank' rel='noopener noreferrer'>
                  <img src={`${images.partners}${con.img}`} alt={con.title} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
