import styles from './productInformation.module.scss';

export default function ProductInformation({ imgSrc, about }) {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_info}>
        <section className={styles.product_img_section}>
          <div className={styles.product_img}>
            <img src={imgSrc} alt='제품 이미지' />
          </div>
        </section>

        <section className={styles.product_about_section}>
          <div className={styles.product_about}>
            {about.map((about, index) => (
              <p key={index}>{about}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
