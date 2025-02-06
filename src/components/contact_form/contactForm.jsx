import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./ContactForm.module.scss";

// SweetAlert 설정
const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "감사합니다!",
    text: "메시지가 성공적으로 발송되었습니다.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const phoneNumber = (value) => {
  //휴대폰 번호 "-" 대시 자동 입력

  value = value.replace(/[^0-9]/g, "");
  return value.replace(
    /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
    "$1-$2-$3"
  );
};

const host = import.meta.env.VITE_BASE_URL; // 서버 URL
const path = "contact/insert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: "제품 문의",
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
  const inquiryOptions = [
    "제품 문의",
    "대리점 문의",
    "유지 보수 문의",
    "기타 문의",
  ];

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
      alert("개인정보 수집 및 이용 동의가 필요합니다.");
      return;
    }

    let contactData = {
      // reciverEmail: "podosee@podosee.com",
      reciverEmail: "hillo@podosee.com",
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
        alert("전송 실패! 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("전송 실패! 다시 시도해주세요.");
    }
  };

  return (
    <div className={styles.contact_container}>
      <form className={styles.contact_form}>
        <div className={styles.row}>
          <label>
            문의 유형<p>*</p>
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
            회사명<p>*</p>
          </label>
          <input
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder='회사명을 입력하세요.'
          />
        </div>

        <div className={styles.row}>
          <label>
            이름<p>*</p>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='이름을 입력하세요.'
          />
        </div>

        <div className={styles.row}>
          <label>
            직급<p>*</p>
          </label>
          <input
            type='text'
            name='jobTitle'
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder='직급을 입력하세요.'
          />
        </div>

        <div className={styles.row}>
          <label>
            연락처<p>*</p>
          </label>
          <input
            type='text'
            name='phone'
            value={formData.phone}
            onChange={handleChangePhoneNum}
            placeholder='연락처를 입력하세요.'
          />
        </div>

        <div className={styles.row}>
          <label>
            E-mail<p>*</p>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='이메일을 입력하세요.'
          />
        </div>

        <div className={styles.title}>
          <label>
            제목<p>*</p>
          </label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='제목을 입력하세요.'
          />
        </div>

        <div className={styles.content}>
          <label>
            문의내용<p>*</p>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='문의하실 내용을 입력하세요.'
          />
        </div>

        <div className={styles.privacy_policy}>
          <p>
            <strong>개인정보처리방침</strong>
          </p>

          <p>
            (주)포도씨(이하 '회사')은 개인정보보호법에 따라 이용자의 개인정보
            보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게
            처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
          </p>

          <p>
            (주)포도씨(이하 '회사')은 개인정보처리방침을 개정하는 경우 웹사이트
            공지사항(또는 개별공지)을 통하여 공지 하겠습니다.
          </p>

          <p>본 방침은 2022년 7월 4일부터 시행됩니다.</p>

          <p>회사의 개인정보처리방침은 다음과 같은 내용을 담고 있습니다.</p>

          <ul>
            <li>1. 수집하는 개인정보 항목</li>
            <li>2. 개인정보의 수집 및 이용목적</li>
            <li>3. 개인정보의 보유 및 이용기간</li>
            <li>4. 개인정보의 파기절차 및 방법</li>
            <li>5. 개인정보 제공</li>
            <li>6. 수집한 개인정보의 위탁</li>
            <li>7. 이용자 및 법정대리인의 권리와 그 행사방법</li>
            <li>
              8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
            </li>
            <li>9. 개인정보에 관한 민원서비스</li>
            <li>10. 기타</li>
            <li>11. 고지의 의무</li>
          </ul>

          <p>
            <strong>1. 수집하는 개인정보 항목</strong>
          </p>

          <p>
            본 사이트는 별도의 회원가입 절차 없이 컨텐츠에 자유롭게 접근할 수
            있습니다. 다만, 회사에 문의사항을 남기는 경우에 한하여 신청자에 관한
            개인정보를 일부 수집하고 있습니다. 회사가 수집하는 개인정보는 다음과
            같습니다.
          </p>

          <p>
            (주)포도씨(이하 회사)는 제품 문의 등을 위해 아래와 같은 개인정보를
            수집하고 있습니다.
          </p>

          <p>
            <strong>1) 수집항목</strong>
          </p>
          <ul>
            <li>① 제품 문의 - 수집항목 : 이름, 연락처, 회사명, 이메일</li>
            <li>
              ② 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로
              생성되어 수집될 수 있습니다. - IP주소, 쿠키, MAC주소, 서비스
              이용기록, 방문기록, 불량 이용기록 등
            </li>
          </ul>

          <p>
            <strong>2. 개인정보의 수집 및 이용목적</strong>
          </p>

          <p>
            회사는 수집한 개인정보를 다음의 목적을 위해 처리합니다. 처리하고
            있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용
            목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를
            받는 등 필요한 조치를 이행할 예정입니다.
          </p>

          <p>
            <strong>1) 제품문의</strong>
          </p>
          <ul>
            <li>
              ① 문의 사항 답변을 위한 연락·통지, 처리결과 통보 등을 목적으로
              개인정보를 처리합니다.
            </li>
          </ul>

          <p>
            <strong>3. 개인정보의 보유 및 이용기간</strong>
          </p>

          <p>
            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
            지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가
            있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
            회원정보를 보관합니다.
          </p>

          <p>
            <strong>1) 본인확인에 관한 기록</strong>
          </p>
          <ul>
            <li>① 보존 이유 : 정보통신 이용촉진 및 정보보호 등에 관한 법률</li>
            <li>② 보존 기간 : 6개월</li>
          </ul>

          <p>
            <strong>2) 방문에 관한 기록</strong>
          </p>
          <ul>
            <li>① 보존 이유 : 통신비밀보호법</li>
            <li>② 보존 기간 : 3개월</li>
          </ul>

          <p>
            <strong>4. 개인정보의 파기절차 및 방법</strong>
          </p>

          <p>
            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
            정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
          </p>

          <p>
            <strong>1) 파기절차</strong>
          </p>

          <ul>
            <li>
              회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후
              별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타
              관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정
              기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에
              의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지
              않습니다.
            </li>
          </ul>

          <p>
            <strong>2) 파기방법</strong>
          </p>

          <ul>
            <li>
              전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법을 사용하여 삭제합니다.
            </li>
          </ul>

          <p>
            <strong>5. 개인정보 제공</strong>
          </p>

          <p>
            회사는 이용자님의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다.
          </p>

          <ul>
            <li>① 이용자님이 사전에 동의한 경우</li>
            <li>
              ② 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
              방법에 따라 수사기관의 요구가 있는 경우
            </li>
          </ul>

          <p>
            <strong>6. 수집한 개인정보의 위탁</strong>
          </p>

          <p>
            회사는 이용자님의 동의없이 이용자님의 정보를 외부 업체에 위탁하지
            않습니다.
          </p>
          <p>
            향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해
            이용자님께 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
          </p>

          <p>
            <strong>7. 이용자 및 법정대리인의 권리와 그 행사방법</strong>
          </p>

          <p>
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할
            수 있습니다.
          </p>
          <p>
            이용자들의 개인정보 조회, 수정을 위해서는 개인정보관리책임자에게
            서면 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
          </p>
          <p>
            귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
          </p>
          <p>
            또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
            처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록
            하겠습니다.
          </p>
          <p>
            회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가
            수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그
            외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
          </p>

          <p>
            <strong>
              8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
            </strong>
          </p>

          <p>
            회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을
            운용합니다. 쿠키란 회사의 홈페이지를 운영하는데 이용되는 서버가
            귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
            하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를
            사용합니다.
          </p>

          <ul>
            <li>
              ① 쿠키 등 사용 목적: 회원과 비회원의 접속 빈도나 방문 시간 등을
              분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트
              참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤
              서비스 제공
            </li>
            <li>
              ② 쿠키 설정 거부 방법: 예: 쿠키 설정을 거부하는 방법으로는
              이용자님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든
              쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든
              쿠키의 저장을 거부할 수 있습니다.
            </li>
          </ul>

          <p>
            <strong>9. 개인정보에 관한 민원서비스</strong>
          </p>

          <p>
            회사는 이용자님의 개인정보를 보호하고 개인정보와 관련한 불만을
            처리하기 위하여 아래와 같이 개인정보관리책임자를 지정하고 있습니다.
          </p>

          <ul>
            <li>① 개인정보 보호책임자 : 모신희 대표</li>
            <li>② 이메일 : cutshion@cutshion.com</li>
          </ul>

          <p>
            귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호
            관련 민원을 개인정보관리책임자에게 신고하실 수 있습니다. 회사는
            이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
          </p>

          <p>
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
          </p>

          <ul>
            <li>1. 개인정보보호 침해센터 (privacy.kisa.or.kr / 02-405-5118)</li>
            <li>
              2. 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-9531~2)
            </li>
            <li>3. 대검찰청 사이버범죄신고 (spo.go.kr / 02-3480-2000)</li>
            <li>4. 경찰청 사이버안전국 (www.ctrc.go.kr / 1566-0112)</li>
          </ul>

          <p>
            <strong>10. 기타</strong>
          </p>

          <p>
            홈페이지에 링크되어 있는 웹사이트들이 개인정보를 수집하는 개별적인
            행위에 대해서는 본 "개인정보처리방침"이 적용되지 않음을 알려
            드립니다.
          </p>

          <p>
            <strong>11. 고지의 의무</strong>
          </p>

          <p>
            현 개인정보처리방침의 내용이 변경될 경우에는 개정 최소 7일전부터
            홈페이지를 통해 고지 하겠습니다.
          </p>
        </div>

        <div className={styles.checkbox_row}>
          <input
            type='checkbox'
            name='agree'
            checked={formData.agree}
            onChange={handleChange}
          />
          <span>
            개인정보 수집 및 이용동의 문구를 확인하였고, 해당 사항에 동의합니다.
          </span>
        </div>
      </form>
      <button
        className={styles.summit_button}
        type='submit'
        onClick={handleSubmit}
      >
        문의하기
      </button>
    </div>
  );
};

export default ContactForm;
