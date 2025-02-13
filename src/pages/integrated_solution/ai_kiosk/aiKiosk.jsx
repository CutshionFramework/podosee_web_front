import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import MenuTab from "../../../components/menu_tab/menuTab";
import PageTitle from "../../../components/page_title/pageTitle";
import images from "../../../constants/imagePath";

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
    freephoto: [images.aikiosk.freephoto.eqt1, images.aikiosk.freephoto.eqt5],
    feveralarm: [
      images.aikiosk.feveralarm.s2,
      images.aikiosk.feveralarm.l1,
      images.aikiosk.feveralarm.k2,
    ],
    vendingmachine: [images.aikiosk.vendingmachine.vendingmachine],
  };

  const specImageMap = {
    freephoto: {
      kr: images.aikiosk.freephoto.spec_kr,
      en: images.aikiosk.freephoto.spec_en,
    },
    feveralarm: {
      kr: images.aikiosk.feveralarm.spec_kr,
      en: images.aikiosk.feveralarm.spec_en,
    },
    vendingmachine: {
      kr: images.aikiosk.vendingmachine.spec_kr,
      en: images.aikiosk.vendingmachine.spec_en,
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
        src={images.aikiosk.freephoto.ex}
        alt='exhibition'
      />
    </div>
  );
};
