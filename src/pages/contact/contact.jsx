import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/contact_form/contactForm";
import PageTitle from "../../components/page_title/pageTitle";
import styles from "./contact.module.scss";

export default function Contact() {
  const title = "문의하기";
  const image = "/assets/page_title/page_title.png";

  return (
    <div>
      <Header />
      <PageTitle title={title} image={image} />

      <div className={styles.description}>
        <p>문의 사항이 있으실 경우 하기 내용을</p>
        <p>기입해 주시면 담당자가 확인 후 빠르게 답변 드리겠습니다.</p>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
