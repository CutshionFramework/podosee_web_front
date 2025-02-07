import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import MenuTab from "../../../components/menu_tab/menuTab";
import PageTitle from "../../../components/page_title/pageTitle";

import styles from "./amr.module.scss";

export default function AMR() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { krName: "T 시리즈", path: "tseries" },
    { krName: "L 시리즈", path: "lseries" },
  ];

  useEffect(() => {
    if (id === "tseries") setCurrentTab(0);
    else if (id === "lseries") setCurrentTab(1);
  }, [id]);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    navigate(`/integrated/amr/${menuArr[index].path}`); // URL 변경
  };

  return (
    <div>
      <Header />
      <PageTitle title='통합 솔루션' />
      <div className={styles.amr_container}>
        <h1>AMR</h1>
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
      </div>
      <Footer />
    </div>
  );
}

const CommmonComponent = ({ currentTab }) => {
  const imageMap = {
    tseries: [
      "/assets/amr/t200.png",
      "/assets/amr/t300.png",
      "/assets/amr/t600.png",
      "/assets/amr/t1000.png",
    ],
    lseries: [
      "/assets/amr/s2.png",
      "/assets/amr/l1.png",
      "/assets/amr/k2.png",
    ],
  };

  const descriptionMap = {
    tseries: [
      "티라로보틱스의 AMR은 모두 차세대 드라이브 기술을 탑재하고 있으며",
      "200kg ~ 1,000kg 범위의 페이로드를 운반할 수 있어 고객의 엔드투엔드 로봇 솔루션에 완벽하게 맞습니다.",
    ],
    lseries: [
      "티라로보틱스의 AMR은 모두 차세대 드라이브 기술을 탑재하고 있으며",
      "200kg ~ 1,000kg 범위의 페이로드를 운반할 수 있어 고객의 엔드투엔드 로봇 솔루션에 완벽하게 맞습니다.",
    ],
  };

  const imageList = imageMap[currentTab] || imageMap["tseries"];
  const descriptionList =
    descriptionMap[currentTab] || descriptionMap["tseries"];

  let imageContainerClass = styles.tseries_container;
  let specImage = "/assets/amr/spec_tseries.png";

  if (currentTab === "tseries") {
    imageContainerClass = styles.tseries_container;
    specImage = "/assets/amr/spec_tseries.png";
  } else if (currentTab === "lseries") {
    imageContainerClass = styles.lseries_container;
    specImage = "/assets/amr/spec_lseries.png";
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

      <img className={styles.spec_img} src={specImage} alt={specImage} />
    </div>
  );
};
