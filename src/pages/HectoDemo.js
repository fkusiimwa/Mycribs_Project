import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HectoDemo.module.css";

const HectoDemo = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  return (
    <div className={styles.hectoDemoDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv}>My Account</div>
          <div className={styles.blogDiv}>Blog</div>
          <div className={styles.latestNewsDiv}>Latest News</div>
          <div className={styles.allCategoriesDiv}>All Categories</div>
          <div className={styles.fAQsDiv} onClick={onFAQsTextClick}>
            FAQs
          </div>
          <div className={styles.discountsDiv}>Discounts</div>
          <div className={styles.bookingHistoryDiv}>Booking History</div>
          <div className={styles.ordersHistoryDiv}>Orders History</div>
          <div className={styles.blogDiv1} onClick={onBlogText1Click}>
            Blog
          </div>
          <div className={styles.aboutUsDiv}>{`About Us `}</div>
          <div className={styles.contactUsDiv}>Contact Us</div>
          <b className={styles.mycribs}>Mycribs</b>
          <div className={styles.categoriesDiv}>Categories</div>
          <div className={styles.myPageDiv}>My Page</div>
          <div className={styles.pagesDiv}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv1} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv2} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv3} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-2052.svg" />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Webecy - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon1} alt="" src="../group-2052.svg" />
      </div>
      <div className={styles.headingBarDiv}>
        <div className={styles.rectangleDiv5} />
        <div className={styles.englishDiv}>English</div>
        <div className={styles.uSDDiv}>USD</div>
        <div className={styles.loginDiv}>Login</div>
        <div className={styles.wishlistDiv}>Wishlist</div>
        <div className={styles.mhhasanulgmailcomDiv}>mycribs@aetotechs.com</div>
        <div className={styles.div}>(256)750 584 763</div>
        <img
          className={styles.uilenvelopeAltIcon}
          alt=""
          src="../uilenvelopealt2.svg"
        />
        <img
          className={styles.bxbxPhoneCallIcon}
          alt=""
          src="../bxbxphonecall2.svg"
        />
        <img className={styles.groupIcon2} alt="" src="../group-172.svg" />
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.pagesDiv1}>Pages</div>
        <div className={styles.productsDiv}>Products</div>
        <div className={styles.blogDiv2}>{`Blog `}</div>
        <div className={styles.shopDiv}>Shop</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
          </div>
        </div>
        <b className={styles.hektoB}>Mycribs</b>
        <div className={styles.groupDiv6}>
          <div className={styles.homeDiv}>Home</div>
        </div>
        <img
          className={styles.akarIconschevronDown}
          alt=""
          src="../akariconschevrondown.svg"
        />
        <img className={styles.uilsearchIcon} alt="" src="../uilsearch2.svg" />
      </div>
      <div className={styles.rectangleDiv8} />
      <b className={styles.signupPageB}>Signup Page</b>
      <div className={styles.groupDiv7}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-51.svg"
        />
        <div className={styles.groupDiv8}>
          <div className={styles.keepMeUpToDateOnNewsAnd}>
            Keep me up to date on news and excluive offers
          </div>
          <div className={styles.firstNameOptional}>First name (optional)</div>
          <div className={styles.emailOrMobilePhoneNumber}>
            Email or mobile phone number
          </div>
          <div className={styles.alreadyHaveAnAccount}>
            Already have an account?
          </div>
          <div className={styles.addressDiv}>Address</div>
          <div className={styles.appaetnentmentsuitetcOptDiv}>
            Appaetnentment,suit,e.t.c (optinal)
          </div>
          <div className={styles.cityDiv}>City</div>
          <div className={styles.countryDiv}>Country</div>
          <div className={styles.nINNumberDiv}>NIN Number</div>
          <div className={styles.lastNameDiv}>Last name</div>
          <img className={styles.uilcheckIcon} alt="" src="../uilcheck1.svg" />
          <div className={styles.lineDiv} />
          <div className={styles.lineDiv1} />
          <div className={styles.lineDiv2} />
          <div className={styles.lineDiv3} />
          <div className={styles.lineDiv4} />
          <div className={styles.lineDiv5} />
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv9} />
            <div className={styles.continueShippingDiv}>Continue Shipping</div>
          </div>
          <b className={styles.shippingAddressB}>Shipping address</b>
          <b className={styles.contactInformationB}>Contact Information</b>
          <div className={styles.logInDiv}>Log in</div>
        </div>
      </div>
      <div className={styles.lineDiv6} />
      <div className={styles.lineDiv7} />
      <div className={styles.groupDiv10}>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv10} />
          <div
            className={styles.shippingTaxesCalculatedAt}
          >{`Shipping & taxes calculated at checkout`}</div>
          <div className={styles.subtotalsDiv}>Subtotals:</div>
          <div className={styles.totalsDiv}>Totals:</div>
          <div className={styles.div1}>‎£219.00</div>
          <div className={styles.div2}>‎£325.00</div>
          <div className={styles.groupDiv12}>
            <div className={styles.rectangleDiv11} />
            <b className={styles.proceedToCheckout}>Proceed To Checkout</b>
          </div>
          <img className={styles.uilcheckIcon1} alt="" src="../uilcheck2.svg" />
        </div>
        <div className={styles.lineDiv8} />
        <div className={styles.lineDiv9} />
      </div>
      <b className={styles.signUpB}>Sign Up</b>
      <div className={styles.personalInformationDiv}>Personal Information</div>
      <div className={styles.groupDiv13}>
        <div className={styles.lineDiv10} />
        <div className={styles.div3}>$32.00</div>
        <div className={styles.utDiamConsequat}>Ut diam consequat</div>
        <div className={styles.colorDiv}>Color:</div>
        <div className={styles.sizeDiv}>Size:</div>
        <div className={styles.brownDiv}>Brown</div>
        <div className={styles.xLDiv}>XL</div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-34@2x.png"
        />
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.lineDiv10} />
        <div className={styles.div3}>$32.00</div>
        <div className={styles.utDiamConsequat}>Ut diam consequat</div>
        <div className={styles.colorDiv}>Color:</div>
        <div className={styles.sizeDiv}>Size:</div>
        <div className={styles.brownDiv}>Brown</div>
        <div className={styles.xLDiv}>XL</div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-144@2x.png"
        />
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.lineDiv10} />
        <div className={styles.div3}>$32.00</div>
        <div className={styles.utDiamConsequat}>Ut diam consequat</div>
        <div className={styles.colorDiv}>Color:</div>
        <div className={styles.sizeDiv}>Size:</div>
        <div className={styles.brownDiv}>Brown</div>
        <div className={styles.xLDiv}>XL</div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-145@2x.png"
        />
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.lineDiv10} />
        <div className={styles.div3}>$32.00</div>
        <div className={styles.utDiamConsequat}>Ut diam consequat</div>
        <div className={styles.colorDiv}>Color:</div>
        <div className={styles.sizeDiv}>Size:</div>
        <div className={styles.brownDiv}>Brown</div>
        <div className={styles.xLDiv}>XL</div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-146@2x.png"
        />
      </div>
      <div className={styles.groupDiv17}>
        <div className={styles.groupDiv18}>
          <div className={styles.lineDiv10} />
          <div className={styles.div3}>$32.00</div>
          <div className={styles.utDiamConsequat}>Ut diam consequat</div>
          <div className={styles.colorDiv}>Color:</div>
          <div className={styles.sizeDiv}>Size:</div>
          <div className={styles.brownDiv}>Brown</div>
          <div className={styles.xLDiv}>XL</div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-147@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HectoDemo;
