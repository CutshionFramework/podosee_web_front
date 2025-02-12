import { Fragment } from 'react';

import styles from './productInformation.module.scss';

export default function ProductInformation({ imgSrc, about }) {
  return (
    <div className={styles.product_container}>
      <div className={styles.product_info}>
        <section className='product_img'>
          <div className={styles.product_img}>
            <img src={imgSrc} alt='제품 이미지' />
          </div>
        </section>

        <section className='product_about'>
          <div className={styles.product_about}>
            <span>
              {about.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
