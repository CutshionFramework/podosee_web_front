import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import styles from "./scrollTop.module.scss";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <BsArrowUpCircle
        onClick={scrollToTop}
        className={styles.scroll_to_top}
        size={30}
      />
    </div>
  );
};

export default ScrollTop;
