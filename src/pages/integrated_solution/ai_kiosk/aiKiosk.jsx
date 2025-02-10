import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import MenuTab from "../../../components/menu_tab/menuTab";
import PageTitle from "../../../components/page_title/pageTitle";

import styles from "./aiKiosk.module.scss";

export default function AIKiosk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { krName: "프리포토 키오스크", path: "freephoto" },
    { krName: "피버 알람", path: "feveralarm" },
    { krName: "자판기", path: "vandingmachine" },
  ];

  useEffect(() => {
    if (id === "freephoto") setCurrentTab(0);
    else if (id === "feveralarm") setCurrentTab(1);
    else if (id === "vandingmachine") setCurrentTab(2);
  }, [id]);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    navigate(`/integrated/aikiosk/${menuArr[index].path}`); // URL 변경
  };

  return (
    <div>
      <Header />
      <PageTitle title='통합솔루션' />
      <div className={styles.aikiosk_container}>
        <h1>AI 키오스크</h1>
        <MenuTab
          menuArr={menuArr}
          currentTab={currentTab}
          onSelect={selectMenuHandler}
        />

        <div className={styles.tab_container}>
          {currentTab === 0 ? <CommmonComponent currentTab={id} /> : null}
        </div>
        <div className={styles.tab_container}>
          {currentTab === 1 ? <CommmonComponent currentTab={id} /> : null}
        </div>
        <div className={styles.tab_container}>
          {currentTab === 2 ? <CommmonComponent currentTab={id} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const CommmonComponent = ({ currentTab }) => {
  const imageMap = {
    freephoto: ["/assets/aikiosk/eqt1.png", "/assets/aikiosk/eqt5.png"],
    feveralarm: [
      "/assets/aikiosk/s2.png",
      "/assets/aikiosk/l1.png",
      "/assets/aikiosk/k2.png",
    ],
    vandingmachine: ["/assets/aikiosk/vandingmachine.png"],
  };

  const descriptionMap = {
    freephoto: [
      "스마트폰 사진의 폭발적인 증가에 발맞춰 개발된 무료 사진 인화 서비스 기기입니다.",
      "'고객이 줄서서 받아보는 광고매체'로 주목받고 있는 검증된 신개념 광고 미디어입니다.",
    ],
    feveralarm: [
      "Fever Alarm은 QR코드 기반의 열화상 출입 관리 시스템입니다.",
      "타인과 접촉에 의해 바이러스 전염이 우려되는 곳에서 안전하게 발열 여부를 체크하고 접촉없이",
      "방문 기록을 동시에 남길 수 있는 '완전 비접촉식 열화상 출입 관리 시스템'입니다.",
    ],
    vandingmachine: [
      "세계 최초의 압력솥 방식의 즉석 라면 조리 자판기입니다.",
      "매출 정보 및 장봥태 정보등을 실시간으로 관리하는 스마트 자판기로 편의점,",
      "야외 공원, 대학교, 학원 등 설치하여 운영할 수 있습니다.",
    ],
  };

  const imageList = imageMap[currentTab] || imageMap["freephoto"];
  const descriptionList =
    descriptionMap[currentTab] || descriptionMap["freephoto"];

  let imageContainerClass = styles.freephoto_container;
  let specImage = "/assets/aikiosk/spec_freephoto.png";

  if (currentTab === "freephoto") {
    imageContainerClass = styles.freephoto_container;
    specImage = "/assets/aikiosk/spec_freephoto.png";
  } else if (currentTab === "feveralarm") {
    imageContainerClass = styles.feveralarm_container;
    specImage = "/assets/aikiosk/spec_feveralarm.png";
  } else if (currentTab === "vandingmachine") {
    imageContainerClass = styles.vandingmachine_container;
    specImage = "/assets/aikiosk/spec_vandingmachine.png";
  }

  return (
    <div className={styles.common_container}>
      <div className={styles.description}>
        {descriptionList.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <div className={imageContainerClass}>
        {imageList.map((src, index) => (
          <img key={index} src={src} alt={`tab-${currentTab}-${index}`} />
        ))}
      </div>

      <h2>제품 스펙</h2>

      <div className={styles.spec_img_container}>
        <img className={styles.spec_img} src={specImage} alt={specImage} />
      </div>

      <img
        className={
          currentTab === "freephoto" ? styles.freephoto_img : styles.none_img
        }
        src={`/assets/aikiosk/ex_freephoto.png`}
        alt='exhibition'
      />
    </div>
  );
};
