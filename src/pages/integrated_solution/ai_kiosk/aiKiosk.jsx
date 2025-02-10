import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import MenuTab from "../../../components/menu_tab/menuTab";
import PageTitle from "../../../components/page_title/pageTitle";

import styles from "./aiKiosk.module.scss";

export default function AIKiosk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: t("aikiosk.menu.freephoto"), path: "freephoto" },
    { name: t("aikiosk.menu.feveralarm"), path: "feveralarm" },
    { name: t("aikiosk.menu.vandingmachine"), path: "vandingmachine" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <PageTitle title={t("aikiosk.solution")} />
      <div className={styles.aikiosk_container}>
        <h1>{t("aikiosk.title")}</h1>
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
  const { t } = useTranslation();
  const imageMap = {
    freephoto: ["/assets/aikiosk/eqt1.png", "/assets/aikiosk/eqt5.png"],
    feveralarm: [
      "/assets/aikiosk/s2.png",
      "/assets/aikiosk/l1.png",
      "/assets/aikiosk/k2.png",
    ],
    vandingmachine: ["/assets/aikiosk/vandingmachine.png"],
  };

  const selectedTab = currentTab || "freephoto";

  const imageList = imageMap[selectedTab];

  const descriptionList = t(`aikiosk.description.${selectedTab}`, {
    returnObjects: true,
  });

  let imageContainerClass = styles.freephoto_container;
  let specImage = "/assets/aikiosk/spec_freephoto.png";

  if (selectedTab === "freephoto") {
    imageContainerClass = styles.freephoto_container;
    specImage = "/assets/aikiosk/spec_freephoto.png";
  } else if (selectedTab === "feveralarm") {
    imageContainerClass = styles.feveralarm_container;
    specImage = "/assets/aikiosk/spec_feveralarm.png";
  } else if (selectedTab === "vandingmachine") {
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
          <img key={index} src={src} alt={`tab-${selectedTab}-${index}`} />
        ))}
      </div>

      <h2>{t("aikiosk.spec")}</h2>

      <div className={styles.spec_img_container}>
        <img className={styles.spec_img} src={specImage} alt={specImage} />
      </div>

      <img
        className={
          selectedTab === "freephoto" ? styles.freephoto_img : styles.none_img
        }
        src={`/assets/aikiosk/ex_freephoto.png`}
        alt='exhibition'
      />
    </div>
  );
};
