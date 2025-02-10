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
  const { t } = useTranslation();
  const imageMap = {
    tseries: [
      "/assets/amr/t200.png",
      "/assets/amr/t300.png",
      "/assets/amr/t600.png",
      "/assets/amr/t1000.png",
    ],
    lseries: ["/assets/amr/l200.png"],
  };

  const selectedTab = currentTab || "tseries";

  const imageList = imageMap[selectedTab];

  const descriptionList = t(`amr.description.${selectedTab}`, {
    returnObjects: true,
  });

  const lseriesDescriptionList = t(`amr.lseries_description`, {
    returnObjects: true,
  });

  let imageContainerClass = styles.tseries_container;
  let specImage = "/assets/amr/spec_tseries.png";

  if (selectedTab === "tseries") {
    imageContainerClass = styles.tseries_container;
    specImage = "/assets/amr/spec_tseries.png";
  } else if (selectedTab === "lseries") {
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
        <img className={styles.spec_img} src={specImage} alt={specImage} />
      </div>
    </div>
  );
};
