import styles from './productSpecification.module.scss';

export default function ProductSpecification({ name, basicImg, commonImg }) {
  return (
    <div className={styles.product_specification}>
      <section className='product_detail_info'>
        <div className={styles.product_name}>
          <span>{name}</span>
        </div>
      </section>

      <section className='specification_img'>
        <div className={styles.specifications}>
          <div className={styles.basic_spec}>
            <img src={basicImg} alt='basic 스펙' />
          </div>
          <div className={styles.common_spec}>
            <img src={commonImg} alt='common 스펙' />
          </div>
        </div>
      </section>
    </div>
  );
}
