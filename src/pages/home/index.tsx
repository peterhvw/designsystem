import icon from '@assets/images/logo.svg';
import styles from './index.module.scss';
import cla from 'classnames';
import {FC} from 'react';
import {useCountState} from '@stores';

const Home: FC = function () {
  const {count, inc, dec} = useCountState();

  return (
    <>
      <div className={styles.buttonShowcase}>
        <h2>Button Showcase</h2>

        <section>
          <h3>Primary Buttons</h3>
          <button className={styles.primaryButton}>Primary Default</button>
          <button className={styles.primarySmallButton}>Primary Small</button>
          <button className={styles.primaryOutlineButton}>
            Primary Outline
          </button>
          <button className={styles.primaryTextButton}>Primary Text</button>
          <button className={styles.primaryFullWidthButton}>
            Primary Full Width
          </button>
        </section>

        <section>
          <h3>Secondary Buttons</h3>
          <button className={styles.secondaryButton}>Secondary Default</button>
          <button className={styles.secondarySmallButton}>
            Secondary Small
          </button>
          <button className={styles.secondaryOutlineButton}>
            Secondary Outline
          </button>
          <button className={styles.secondaryTextButton}>Secondary Text</button>
          <button className={styles.secondaryFullWidthButton}>
            Secondary Full Width
          </button>
        </section>

        <section>
          <h3>Tertiary Buttons</h3>
          <button className={styles.tertiaryButton}>Tertiary Default</button>
          <button className={styles.tertiarySmallButton}>Tertiary Small</button>
          <button className={styles.tertiaryOutlineButton}>
            Tertiary Outline
          </button>
          <button className={styles.tertiaryTextButton}>Tertiary Text</button>
          <button className={styles.tertiaryFullWidthButton}>
            Tertiary Full Width
          </button>
        </section>


        <section>
          <h3>Buttons with Icons</h3>
          <button className={styles.tertiarySmallButton}>
            Small Icon <img className={styles.iconSmall} src="/src/assets/icons/add-circle-outline.svg" alt="Add" />
          </button>
          <button className={styles.secondaryButton}>
            Medium Icon <img className={styles.iconMedium} src="/src/assets/icons/chevron-forward-outline.svg" alt="Forward" />
          </button>
          <button className={styles.tertiaryButton}>
            Large Icon <img className={styles.iconLarge} src="/src/assets/icons/arrow-back-outline.svg" alt="Back" />
          </button>
          <button className={styles.primaryOutlineButton}>
            Premium Icon <img className={styles.iconPremium} src="/src/assets/icons/add-circle-outline.svg" alt="Add" />
          </button>
          <button className={styles.secondaryOutlineButton}>
            Secondary Icon <img className={styles.iconSecondary} src="/src/assets/icons/chevron-back-outline.svg" alt="Back" />
          </button>
          <button className={styles.tertiaryOutlineButton}>
            Tertiary Icon <img className={styles.iconTertiary} src="/src/assets/icons/chevron-forward-outline.svg" alt="Forward" />
          </button>
          <button className={styles.primaryButton}>
            Black Icon <img className={styles.iconBlack} src="/src/assets/icons/add-circle-outline.svg" alt="Add" />
          </button>
          <button className={styles.secondaryButton}>
            White Icon <img className={styles.iconWhite} src="/src/assets/icons/arrow-back-outline.svg" alt="Back" />
          </button>
        </section>

        <section>
          <h3>Input Variants</h3>

          <div className={styles.buttonShowcase}>
            {/* Input with left icon */}
            <div className={`${styles.inputWrapper} ${styles.inputWithLeftIcon}`}>
              <div className={styles.inputContainer}>
                <img src="/path/to/left-icon.svg" alt="Left Icon" className={styles.inputIcon} />
                <input type="text" placeholder="Input with left icon" className={styles.input} />
              </div>
            </div>

            {/* Input with right icon */}
            <div className={`${styles.inputWrapper} ${styles.inputWithRightIcon}`}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Input with right icon" className={styles.input} />
                <img src="/path/to/right-icon.svg" alt="Right Icon" className={styles.inputIcon} />
              </div>
            </div>

            {/* Input with both icons */}
            <div className={`${styles.inputWrapper} ${styles.inputWithBothIcons}`}>
              <div className={styles.inputContainer}>
                <img src="/path/to/left-icon.svg" alt="Left Icon" className={styles.inputIcon} />
                <input type="text" placeholder="Input with both icons" className={styles.input} />
                <img src="/path/to/right-icon.svg" alt="Right Icon" className={styles.inputIcon} />
              </div>
            </div>
          </div>


          <div className={styles.buttonShowcase}>
            {/* Default Input */}
            <div className={styles.inputWrapper}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Default Input" className={styles.input} />
              </div>
            </div>

            {/* Small Input */}
            <div className={`${styles.inputWrapper} ${styles.inputSmall}`}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Small Input" className={styles.input} />
              </div>
            </div>

            {/* Input without Border */}
            <div className={`${styles.inputWrapper} ${styles.inputNoBorder}`}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Input without Border" className={styles.input} />
              </div>
            </div>

            {/* Input with Left Icon */}
            <div className={`${styles.inputWrapper} ${styles.inputWithLeftIcon}`}>
              <div className={styles.inputContainer}>
                <img src="/src/assets/icons/add-circle-outline.svg" alt="Add" className={styles.inputIcon} />
                <input type="text" placeholder="Input with Left Icon" className={styles.input} />
              </div>
            </div>

            {/* Input with Right Icon */}
            <div className={`${styles.inputWrapper} ${styles.inputWithRightIcon}`}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Input with Right Icon" className={styles.input} />
                <img src="/src/assets/icons/chevron-forward-outline.svg" alt="Forward" className={styles.inputIcon} />
              </div>
            </div>

            {/* Input with Both Icons */}
            <div className={`${styles.inputWrapper} ${styles.inputWithBothIcons}`}>
              <div className={styles.inputContainer}>
                <img src="/src/assets/icons/add-circle-outline.svg" alt="Add" className={styles.inputIcon} />
                <input type="text" placeholder="Input with Both Icons" className={styles.input} />
                <img src="/src/assets/icons/chevron-forward-outline.svg" alt="Forward" className={styles.inputIcon} />
              </div>
            </div>

            {/* Small Input with Left Icon */}
            <div className={`${styles.inputWrapper} ${styles.inputSmallWithLeftIcon}`}>
              <div className={styles.inputContainer}>
                <img src="/src/assets/icons/arrow-back-outline.svg" alt="Back" className={styles.inputIcon} />
                <input type="text" placeholder="Small Input with Left Icon" className={styles.input} />
              </div>
            </div>

            {/* Small Input with Right Icon */}
            <div className={`${styles.inputWrapper} ${styles.inputSmallWithRightIcon}`}>
              <div className={styles.inputContainer}>
                <input type="text" placeholder="Small Input with Right Icon" className={styles.input} />
                <img src="/src/assets/icons/chevron-back-outline.svg" alt="Back" className={styles.inputIcon} />
              </div>
            </div>

            {/* Small Input with Both Icons */}
            <div className={`${styles.inputWrapper} ${styles.inputSmallWithBothIcons}`}>
              <div className={styles.inputContainer}>
                <img src="/src/assets/icons/add-circle-outline.svg" alt="Add" className={styles.inputIcon} />
                <input type="text" placeholder="Small Input with Both Icons" className={styles.input} />
                <img src="/src/assets/icons/chevron-forward-outline.svg" alt="Forward" className={styles.inputIcon} />
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Home;
