import heroImg from '../../assets/hero.svg';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCenter}>
        <div className={styles.heroTitle}>
          <h1>Contentful CMS</h1>
          <p>
            We are ensuring code maintainability by not opting for clever one-liners, and
            favoring readability. The style guide is consistently enforced using ESLint
            and regular code reviews. Each pull request properly goes through a rigorous
            process of peer review before getting merged.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={heroImg} alt="hero" className={'img'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
