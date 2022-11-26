import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyAccount.module.css";

const MyAccount = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHektoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText2Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/hecto-demo");
  }, [navigate]);

  return (
    <div className={styles.myAccountDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-115.svg"
          />
          <div className={styles.groupDiv2}>
            <div className={styles.div}>.</div>
            <div className={styles.div1}>.</div>
            <div className={styles.homeDiv}>{`Home `}</div>
            <div className={styles.pagesDiv}>Pages</div>
            <div className={styles.myAccountDiv1}>My Account</div>
            <b className={styles.myAccountB}>My Account</b>
          </div>
          <div className={styles.headingBarDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.englishDiv}>English</div>
            <div className={styles.uSDDiv}>USD</div>
            <div className={styles.loginDiv}>Login</div>
            <div className={styles.wishlistDiv}>Wishlist</div>
            <div className={styles.mhhasanulgmailcomDiv}>
              mycribs@aetotechs.com
            </div>
            <div className={styles.div2}>(256)750 584 763</div>
            <img
              className={styles.uilenvelopeAltIcon}
              alt=""
              src="../uilenvelopealt1.svg"
            />
            <img
              className={styles.bxbxPhoneCallIcon}
              alt=""
              src="../bxbxphonecall1.svg"
            />
            <img className={styles.groupIcon} alt="" src="../group-177.svg" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv1}>Hostels</div>
            <div className={styles.productsDiv} onClick={onProductsTextClick}>
              About Us
            </div>
            <div
              className={styles.blogDiv}
              onClick={onBlogTextClick}
            >{`Blog `}</div>
            <div className={styles.shopDiv} onClick={onShopTextClick}>
              Contact
            </div>
            <div className={styles.contactDiv}>Contact</div>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv1} />
              <div className={styles.groupDiv4}>
                <div className={styles.rectangleDiv2} />
              </div>
            </div>
            <b className={styles.hektoB} onClick={onHektoTextClick}>
              Mycribs
            </b>
            <div className={styles.groupDiv5}>
              <div className={styles.homeDiv1}>Home</div>
            </div>
            <img
              className={styles.akarIconschevronDown}
              alt=""
              src="../akariconschevrondown.svg"
            />
            <img
              className={styles.uilsearchIcon}
              alt=""
              src="../uilsearch7.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv2}>My Account</div>
          <div className={styles.blogDiv1}>Blog</div>
          <div className={styles.latestNewsDiv}>Latest News</div>
          <div className={styles.allCategoriesDiv}>All Categories</div>
          <div className={styles.fAQsDiv} onClick={onFAQsTextClick}>
            FAQs
          </div>
          <div className={styles.discountsDiv}>Discounts</div>
          <div className={styles.bookingHistoryDiv}>Booking History</div>
          <div className={styles.ordersHistoryDiv}>Orders History</div>
          <div className={styles.blogDiv2} onClick={onBlogText2Click}>
            Blog
          </div>
          <div className={styles.aboutUsDiv}>{`About Us `}</div>
          <div className={styles.contactUsDiv}>Contact Us</div>
          <b className={styles.mycribs}>Mycribs</b>
          <div className={styles.categoriesDiv}>Categories</div>
          <div className={styles.myPageDiv}>My Page</div>
          <div className={styles.pagesDiv2}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv4} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv5} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv6} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-20513.svg" />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Webecy - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-20513.svg" />
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv8} />
        <div className={styles.groupDiv11}>
          <div className={styles.pleaseLoginUsingAccountDet}>
            Please login using account detail bellow.
          </div>
          <div className={styles.forgotYourPassword}>Forgot your password?</div>
          <div
            className={styles.dontHaveAnAccountCreateA}
            onClick={onDontHaveAnClick}
          >
            <span>Don’t have an Account?</span>
            <span className={styles.createAccountSpan}>Create account</span>
          </div>
          <b className={styles.loginB}>Login</b>
          <div className={styles.rectangleDiv9} />
          <div className={styles.rectangleDiv10} />
          <div className={styles.groupDiv12}>
            <div className={styles.rectangleDiv11} />
            <b className={styles.signInB}>Sign In</b>
          </div>
          <div className={styles.emailAddressDiv}>Email Address</div>
          <div className={styles.passwordDiv}>Password</div>
        </div>
      </div>
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
    </div>
  );
};

export default MyAccount;
