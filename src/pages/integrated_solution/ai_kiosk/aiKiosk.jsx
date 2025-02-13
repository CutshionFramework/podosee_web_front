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
    { name: t("aikiosk.menu.vendingmachine"), path: "vendingmachine" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id === "freephoto") setCurrentTab(0);
    else if (id === "feveralarm") setCurrentTab(1);
    else if (id === "vendingmachine") setCurrentTab(2);
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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const imageMap = {
    freephoto: ["/assets/aikiosk/eqt1.png", "/assets/aikiosk/eqt5.png"],
    feveralarm: [
      "/assets/aikiosk/s2.png",
      "/assets/aikiosk/l1.png",
      "/assets/aikiosk/k2.png",
    ],
    vendingmachine: ["/assets/aikiosk/vendingmachine.png"],
  };

  const specImageMap = {
    freephoto: {
      kr: "/assets/aikiosk/spec_freephoto.png",
      en: "/assets/aikiosk/spec_freephoto_en.png",
    },
    feveralarm: {
      kr: "/assets/aikiosk/spec_feveralarm.png",
      en: "/assets/aikiosk/spec_feveralarm_en.png",
    },
    vendingmachine: {
      kr: "/assets/aikiosk/spec_vendingmachine.png",
      en: "/assets/aikiosk/spec_vendingmachine_en.png",
    },
  };

  const selectedTab = currentTab || "freephoto";

  const imageList = imageMap[selectedTab];

  const descriptionList = t(`aikiosk.description.${selectedTab}`, {
    returnObjects: true,
  });

  const imageContainerClass =
    styles[`${selectedTab}_container`] || styles.freephoto_container;

  const specImgClass = `${styles.spec_img} ${
    selectedTab === "freephoto"
      ? styles.freephoto_spec
      : selectedTab === "feveralarm"
      ? styles.feveralarm_spec
      : selectedTab === "vendingmachine"
      ? styles.vendingmachine_spec
      : ""
  }`;

  const specImage =
    specImageMap[selectedTab]?.[currentLanguage] ||
    specImageMap[selectedTab]?.kr;

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
        <img className={specImgClass} src={specImage} alt={specImage} />
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
