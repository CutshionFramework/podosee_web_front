import styles from "./menuTab.module.scss";

const MenuTab = ({ menuArr, currentTab, onSelect }) => {
  return (
    <div className={styles.menu_tab}>
      {menuArr.map((menu, index) => (
        <div
          key={index}
          className={`${styles.tab_item} ${
            currentTab === index ? styles.active : ""
          }`}
          onClick={() => onSelect(index)}
        >
          {menu.krName}
        </div>
      ))}
    </div>
  );
};

export default MenuTab;
