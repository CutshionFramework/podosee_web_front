import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";
import images from "../../imageConfig";

export default function Error() {
  useEffect(() => {
    document.documentElement.style.paddingTop = "0"; // <html> 요소의 padding-top을 0으로 설정
    document.body.style.paddingTop = "0"; // <body> 요소의 padding-top도 0으로 설정

    return () => {
      document.documentElement.style.paddingTop = "62px"; // 기본 페이지로 돌아올 때 원래대로
      document.body.style.paddingTop = "62px";
    };
  }, []);

  return (
    <div className={styles.error_area}>
      <div className={styles.table}>
        <div className={styles.table_cell}>
          <div className={styles.container}>
            <div className={styles.error_content}>
              <img src={images.error} alt='Error' />
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
