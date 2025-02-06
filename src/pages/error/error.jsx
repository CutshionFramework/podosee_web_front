import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";

export default function Error() {
  return (
    <div className={styles.error_area}>
      <div className={styles.table}>
        <div className={styles.table_cell}>
          <div className={styles.container}>
            <div className={styles.error_content}>
              <img src='https://podosee.com/img/error.png' alt='Error' />
              <h3>없는 페이지 입니다</h3>
              <p>확인 후 다시 요청 바랍니다.</p>

              <div className={styles.btn_box}>
                <Link to='/' className={styles.default_btn}>
                  <i className='flaticon-history'></i> 뒤로가기 <span></span>
                </Link>
                <Link to='/' className={styles.default_btn}>
                  <i className='flaticon-earth-day'></i> 홈으로 이동{" "}
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
