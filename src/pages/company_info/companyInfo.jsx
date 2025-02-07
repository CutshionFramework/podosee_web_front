import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PageTitle from "../../components/page_title/pageTitle";
import MenuTab from "../../components/menu_tab/menuTab"; // 추가
import styles from "./companyInfo.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPartner, getHistory } from "../../apis/apis";

export default function CompanyInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [partnerData, setPartnerData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { krName: "대표이사 인사말", path: "greeting" },
    { krName: "회사 연혁", path: "history" },
    { krName: "오시는 길", path: "location" },
    { krName: "제휴사", path: "partners" },
  ];

  useEffect(() => {
    getHistoryData();
    getPartnerData();
  }, []);

  useEffect(() => {
    if (id === "greeting") setCurrentTab(0);
    else if (id === "history") setCurrentTab(1);
    else if (id === "location") setCurrentTab(2);
    else if (id === "partners") setCurrentTab(3);
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
      <PageTitle title='회사 소개' />
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

const CeoGreeting = () => (
  <div className={styles.ceo_greeting}>
    <h3>
      <strong>포도씨 방문을 환영합니다.</strong>
    </h3>
    <p>포도씨는 서로 다른 배경과 경험을 가진 사람들이 모인 곳입니다.</p>
    <p>그러나 같은 방향을 바라보고 있습니다.</p>
    <p>그 속에서 각자의 꿈을 이루기 위해 함께 노력하고 있습니다.</p>
    <p className={styles.highlight}>Think free, thank all !</p>
    <p>
      포도씨의 기업이념은 개개인의 생각을 자유롭게 표현하여 모두에게 기여할 수
      있는
    </p>
    <p>
      상품과 서비스를 제공함으로써 세상에 감사할 수 있는 기회를 만드는 것입니다.
    </p>
    <p>변화하는 시대속에서 삶의 가치를 높이고 행복을 추구하겠습니다.</p>
    <p>최선의 노력으로 성장해 나가겠습니다.</p>
    <p className={styles.p_margin}>
      홈페이지를 방문해 주신 모든 분들께 건강과 행운이 함께 하시길 기원합니다.
    </p>
    <p className={styles.p_margin_botton}>감사합니다.</p>
    <p>대표이사 모신희</p>
  </div>
);

const History = ({ historyData }) => (
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
                  <span className={styles.month_name}>{month}월</span>
                  <div className={styles.activity_list}>
                    {historyData[year][month].kr.map((activity, index) => (
                      <div key={index} className={styles.activity_item}>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
  </div>
);

const Location = () => (
  <div className={styles.location_container}>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.103666917419!2d126.88647623196432!3d37.517796980052985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e8af0bbfb8b%3A0x8e5a3c8588c58e41!2zKOyjvCntj6zrj4TslKg!5e0!3m2!1sko!2skr!4v1712015536755!5m2!1sko!2skr'
      allowFullScreen
    ></iframe>
    <div className={styles.location_info}>
      <span className={styles.address}>
        ADDRESS 서울시 영등포구 선유로 9길 10, 709호 (문래 SK V1 Center)
      </span>
      <span className={styles.tel}>Tel 070-8959-2960</span>
    </div>
  </div>
);

const Partners = ({ partnerData }) => {
  const groupedPartners = partnerData.reduce((acc, con) => {
    if (!acc[con.type]) {
      acc[con.type] = [];
    }
    acc[con.type].push(con);
    return acc;
  }, {});

  return (
    <div className={styles.partners_container}>
      {Object.entries(groupedPartners).map(([type, partners]) => (
        <div key={type} className={styles.partner_group}>
          <h2>{type}</h2>
          <div className={styles.partner_list}>
            {partners.map((con, i) => (
              <div key={i} className={styles.partner_card}>
                <a href={con.url[0]} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={`https://api.podobot.com/public/img/${con.img}`}
                    alt={con.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
