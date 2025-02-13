import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/contact_form/contactForm";
import PageTitle from "../../components/page_title/pageTitle";
import styles from "./contact.module.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import images from "../../constants/imagePath";

export default function Contact() {
  const { t } = useTranslation();
  const title = t("contact.title");

  const descriptionList = t(`contact.description`, {
    returnObjects: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <PageTitle title={title} image={images.contact.page_title} />

      <div className={styles.description}>
        {descriptionList.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}
