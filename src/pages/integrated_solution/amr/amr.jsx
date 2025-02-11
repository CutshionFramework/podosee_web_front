import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import MenuTab from "../../../components/menu_tab/menuTab";
import PageTitle from "../../../components/page_title/pageTitle";

import styles from "./amr.module.scss";

export default function AMR() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: t("amr.menu.tseries"), path: "tseries" },
    { name: t("amr.menu.lseries"), path: "lseries" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <PageTitle title={t("amr.solution")} />
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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const imageMap = {
    tseries: [
      "/assets/amr/t200.png",
      "/assets/amr/t300.png",
      "/assets/amr/t600.png",
      "/assets/amr/t1000.png",
    ],
    lseries: ["/assets/amr/l200.png"],
  };

  const specImageMap = {
    tseries: {
      kr: "/assets/amr/spec_tseries.png",
      en: "/assets/amr/spec_tseries_en.png",
    },
    lseries: {
      kr: "/assets/amr/spec_lseries.png",
      en: "/assets/amr/spec_lseries_en.png",
    },
  };

  const selectedTab = currentTab || "tseries";

  const imageList = imageMap[selectedTab];

  const descriptionList = t(`amr.description.${selectedTab}`, {
    returnObjects: true,
  });

  const lseriesDescriptionList = t(`amr.lseries_description`, {
    returnObjects: true,
  });

  const imageContainerClass =
    styles[`${selectedTab}_container`] || styles.tseries_container;

  const specImgClass = `${styles.spec_img} ${
    selectedTab === "tseries"
      ? styles.tseries_spec
      : selectedTab === "lseries"
      ? styles.lseries_spec
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

        <div
          className={
            selectedTab === "lseries"
              ? styles.lseries_description
              : styles.none_lseries_description
          }
        >
          {lseriesDescriptionList.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <h2>{t("amr.spec")}</h2>

      <div className={styles.spec_img_container}>
        <img className={specImgClass} src={specImage} alt={specImage} />
      </div>
    </div>
  );
};
