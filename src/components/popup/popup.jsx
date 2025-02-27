import { useEffect, useState } from "react";
import styles from "./popup.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import images from "../../constants/imagePath";

export default function Popup() {
  const [open, setOpen] = useState(null);
  const [checked, setChecked] = useState(false);
  const [cookies, setCookies] = useCookies(["POPUP_Cookie"]);

  // 쿠키 만료일 설정 함수
  const getExpiredDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  useEffect(() => {
    if (cookies["POPUP_Cookie"]) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [cookies]);

  const handleClose = () => {
    if (checked) {
      setCookies("POPUP_Cookie", "true", {
        path: "/",
        expires: getExpiredDate(1),
      });
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  // 팝업이 열릴 때만 렌더링하도록 처리
  if (open === null) return null; // open이 null일 때는 렌더링하지 않음

  if (!open) return null; // 팝업을 닫은 상태에서는 렌더링하지 않음

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
