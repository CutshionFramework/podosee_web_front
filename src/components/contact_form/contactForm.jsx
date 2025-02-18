import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./contactForm.module.scss";
import { useTranslation } from "react-i18next";

const phoneNumber = (value) => {
  //휴대폰 번호 "-" 대시 자동 입력

  value = value.replace(/[^0-9]/g, "");
  return value.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    "$1-$2-$3"
  );
};

const host = import.meta.env.VITE_BASE_URL; // 서버 URL
const path = "contact/insert3";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const alerts = t("contact.alerts", { returnObjects: true });
  const inquiryOptions = t(`contact.inquiry_options`, {
    returnObjects: true,
  });
  const formLabels = t("contact.form", { returnObjects: true });
  const placeholders = t("contact.placeholders", { returnObjects: true });
  const privacyPolicy = t("contact.privacy_policy", { returnObjects: true });

  const [formData, setFormData] = useState({
    inquiryType: inquiryOptions[0],
    companyName: "",
    jobTitle: "",
    name: "",
    phone: "",
    email: "",
    title: "",
    message: "",
    agree: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const MySwal = withReactContent(Swal);

  // 언어 변경 시 inquiryType도 변경되도록 추가
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      inquiryType: inquiryOptions[0],
    }));
  }, [currentLanguage]);

  const alertContent = () => {
    MySwal.fire({
      title: alerts.success.title,
      text: alerts.success.message,
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const handleSelect = (option) => {
    setFormData((prevState) => ({ ...prevState, inquiryType: option }));
    setIsDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? e.target.checked : value,
    });
  };

  const handleChangePhoneNum = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: phoneNumber(value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert(alerts.agree_required);
      return;
    }

    let contactData = {
      reciverEmail: "podosee@podosee.com",
      // reciverEmail: "hillo@podosee.com",
      email: formData.email,
      userInfo: formData.name + "/" + formData.jobTitle,
      company: formData.companyName,
      companySize: "포도씨에선 미수집",
      type: "포도씨에선 미수집",
      message:
        formData.inquiryType + "/" + formData.title + "\r\n" + formData.message,
      industry: "포도씨에선 미수집",
      tel: formData.phone,
      result: true,
      chackbox: formData.agree,
    };

    try {
      console.log(contactData);

      const response = await axios({
        method: "POST",
        url: `${host}/${path}`,
        timeout: 2000,
        responseType: "json",
        data: contactData,
      });

      if (response.data.result === 0) {
        alertContent();
      } else {
        alert(alerts.failure);
      }
    } catch (error) {
      console.log(error);
      alert(alerts.failure);
    }
  };

  return (
    <div className={styles.contact_container}>
      <form className={styles.contact_form}>
        <div className={styles.row}>
          <label>
            {formLabels.inquiry_type}
            <p>*</p>
          </label>
          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className={styles.selected}>{formData.inquiryType}</div>
            {isDropdownOpen && (
              <ul className={styles.dropdown_menu}>
                {inquiryOptions.map((option, index) => (
                  <li key={index} onClick={() => handleSelect(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <label>
            {formLabels.company_name}
            <p>*</p>
          </label>
          <input
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder={placeholders.company_name}
          />
        </div>

        <div className={styles.row}>
          <label>
            {formLabels.name}
            <p>*</p>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder={placeholders.name}
          />
        </div>

        <div className={styles.row}>
          <label>
            {formLabels.job_title}
            <p>*</p>
          </label>
          <input
            type='text'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder={placeholders.job_title}
          />
        </div>

        <div className={styles.row}>
          <label>
            {formLabels.phone}
            <p>*</p>
          </label>
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChangePhoneNum}
            placeholder={placeholders.phone}
          />
        </div>

        <div className={styles.row}>
          <label>
            {formLabels.email}
            <p>*</p>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder={placeholders.email}
          />
        </div>

        <div className={styles.title}>
          <label>
            {formLabels.title}
            <p>*</p>
          </label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder={placeholders.title}
          />
        </div>

        <div className={styles.content}>
          <label>
            {formLabels.message}
            <p>*</p>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder={placeholders.message}
          />
        </div>

        <div className={styles.privacy_policy}>
          <p>
            <strong>{privacyPolicy.privacy_policy}</strong>
          </p>

          <p>{privacyPolicy.company_info}</p>

          <p>{privacyPolicy.company_policy_update}</p>

          <p>{privacyPolicy.policy_effective_date}</p>

          <p>{privacyPolicy.company_privacy_content}</p>

          <ul>
            <li>{privacyPolicy.item1}</li>
            <li>{privacyPolicy.item2}</li>
            <li>{privacyPolicy.item3}</li>
            <li>{privacyPolicy.item4}</li>
            <li>{privacyPolicy.item5}</li>
            <li>{privacyPolicy.item6}</li>
            <li>{privacyPolicy.item7}</li>
            <li>{privacyPolicy.item8}</li>
            <li>{privacyPolicy.item9}</li>
            <li>{privacyPolicy.item10}</li>
            <li>{privacyPolicy.item11}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item1}</strong>
          </p>

          <p>{privacyPolicy.item1_explanation1}</p>

          <p>{privacyPolicy.item1_explanation2}</p>

          <p>
            <strong>{privacyPolicy.item1_explanation3}</strong>
          </p>
          <ul>
            <li>{privacyPolicy.item1_explanation4}</li>
            <li>{privacyPolicy.item1_explanation5}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item2}</strong>
          </p>

          <p>{privacyPolicy.item2_explanation1}</p>

          <p>
            <strong>{privacyPolicy.item2_explanation2}</strong>
          </p>
          <ul>
            <li>{privacyPolicy.item2_explanation3}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item3}</strong>
          </p>

          <p>{privacyPolicy.item3_explanation1}</p>

          <p>
            <strong>{privacyPolicy.item3_explanation2}</strong>
          </p>
          <ul>
            <li>{privacyPolicy.item3_explanation3}</li>
            <li>{privacyPolicy.item3_explanation4}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item3_explanation5}</strong>
          </p>
          <ul>
            <li>{privacyPolicy.item3_explanation6}</li>
            <li>{privacyPolicy.item3_explanation7}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item4}</strong>
          </p>

          <p>{privacyPolicy.item4_explanation1}</p>

          <p>
            <strong>{privacyPolicy.item4_explanation2}</strong>
          </p>

          <ul>
            <li>{privacyPolicy.item4_explanation3}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item4_explanation4}</strong>
          </p>

          <ul>
            <li>{privacyPolicy.item4_explanation5}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item5}</strong>
          </p>

          <p>{privacyPolicy.item5_explanation1}</p>

          <ul>
            <li>{privacyPolicy.item5_explanation2}</li>
            <li>{privacyPolicy.item5_explanation3}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item6}</strong>
          </p>

          <p>{privacyPolicy.item6_explanation1}</p>
          <p>{privacyPolicy.item6_explanation2}</p>

          <p>
            <strong>{privacyPolicy.item7}</strong>
          </p>

          <p>{privacyPolicy.item7_explanation1}</p>
          <p>{privacyPolicy.item7_explanation2}</p>
          <p>{privacyPolicy.item7_explanation3}</p>
          <p>{privacyPolicy.item7_explanation4}</p>
          <p>{privacyPolicy.item7_explanation5}</p>

          <p>
            <strong>{privacyPolicy.item8}</strong>
          </p>

          <p>{privacyPolicy.item8_explanation1}</p>

          <ul>
            <li>{privacyPolicy.item8_explanation2}</li>
            <li>{privacyPolicy.item8_explanation3}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item9}</strong>
          </p>

          <p>{privacyPolicy.item9_explanation1}</p>

          <ul>
            <li>{privacyPolicy.item9_explanation2}</li>
            <li>{privacyPolicy.item9_explanation3}</li>
          </ul>

          <p>{privacyPolicy.item9_explanation4}</p>

          <p>{privacyPolicy.item9_explanation5}</p>

          <ul>
            <li>{privacyPolicy.item9_explanation6}</li>
            <li>{privacyPolicy.item9_explanation7}</li>
            <li>{privacyPolicy.item9_explanation8}</li>
            <li>{privacyPolicy.item9_explanation9}</li>
          </ul>

          <p>
            <strong>{privacyPolicy.item10}</strong>
          </p>

          <p>{privacyPolicy.item10_explanation1}</p>

          <p>
            <strong>{privacyPolicy.item11}</strong>
          </p>

          <p>{privacyPolicy.item11_explanation1}</p>
        </div>

        <div className={styles.checkbox_row}>
          <input
            type='checkbox'
            name='agree'
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>{formLabels.agree}</span>
        </div>
      </form>
      <button
        className={styles.summit_button}
        type='submit'
        onClick={handleSubmit}
      >
        {t("contact.submit")}
      </button>
    </div>
  );
};

export default ContactForm;
