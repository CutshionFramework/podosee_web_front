import { useEffect, useState } from "react";
import styles from "./popup.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import images from "../../constants/imagePath";

export default function Popup() {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);
  const [cookies, setCookies] = useCookies(["HBB_Cookie"]);

  // 쿠키 만료일 설정 함수
  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  // 페이지 로드 시 쿠키 확인 후 팝업 상태 설정
  useEffect(() => {
    if (cookies["HBB_Cookie"]) {
      setOpen(false);
    }
  }, [cookies]);

  // 닫기 버튼 핸들러
  const handleClose = () => {
    if (checked) {
      setCookies("HBB_Cookie", "true", {
        path: "/",
        expires: getExpiredDate(1),
      });
    }
    setOpen(false);
  };

  // 체크박스 핸들러
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  if (!open) return null;

  return (
    <div
      className={`${styles.popup_background} ${open ? "" : styles.disappeared}`}
    >
      <div className={styles.popup}>
        <RiCloseLine className={styles.closeBtn} onClick={handleClose} />

        <div className={styles.image_container}>
          <img
            src={images.popup.event}
            alt='이벤트 배너 이미지'
            className={styles.image}
          />
          <a
            href={images.popup.googleform}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.clickable_image_box}
          >
            <img
              src={images.popup.button}
              alt='클릭 가능한 이미지'
              className={styles.clickable_image}
            />
          </a>
        </div>

        <div className={styles.input_container}>
          <input
            type='checkbox'
            id='checkbox'
            className={styles.checkbox}
            onChange={handleChange}
          />
          <label htmlFor='checkbox' className={styles.label}>
            오늘 하루 더 이상 보지 않기
          </label>
        </div>
      </div>
    </div>
  );
}
