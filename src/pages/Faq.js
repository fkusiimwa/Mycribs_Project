import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Faq.module.css";

const Faq = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
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

  const onRectangle13Click = useCallback(() => {
    navigate("/faq-message-sent");
  }, [navigate]);

  return (
    <div className={styles.faqDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
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
            <div className={styles.faqDiv1}>Faq</div>
            <b className={styles.fAQB}>FAQ</b>
          </div>
          <div className={styles.headingBarDiv}>
            <div className={styles.rectangleDiv} />
            <div className={styles.englishDiv}>English</div>
            <div className={styles.uSDDiv}>g</div>
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
            <img className={styles.groupIcon} alt="" src="../group-171.svg" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv1}>Hostels</div>
            <div className={styles.productsDiv} onClick={onProductsTextClick}>
              About Us
            </div>
            <div className={styles.blogDiv}>{`Blog `}</div>
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
              src="../uilsearch9.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv}>My Account</div>
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
          <img className={styles.groupIcon1} alt="" src="../group-20517.svg" />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-20517.svg" />
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv8} />
        <div className={styles.rectangleDiv9} />
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} onClick={onRectangle13Click} />
      </div>
      <b className={styles.b}>*</b>
      <b className={styles.b1}>*</b>
      <b className={styles.b2}>*</b>
      <b className={styles.euDictumstCumAtSedEuismoo}>
        Eu dictumst cum at sed euismood condimentum?
      </b>
      <b className={styles.odioMuskanaHakErisConseeki}>
        Odio muskana hak eris conseekin sceleton?
      </b>
      <b className={styles.magnaBibendumEstFermentumE}>
        Magna bibendum est fermentum eros.
      </b>
      <b className={styles.elitIdBlanditSabaraBoiVel}>
        Elit id blandit sabara boi velit gua mara?
      </b>
      <div className={styles.yourNameDiv}>Your Name</div>
      <div className={styles.subjectDiv}>Subject</div>
      <div className={styles.typeYourMessage}>Type Your Message</div>
      <div className={styles.submitDiv}>{`Submit `}</div>
      <div className={styles.submitDiv}>{`Submit `}</div>
      <b className={styles.askAQuestion}>Ask a Question</b>
      <b className={styles.generalInformationB}>General Information</b>
      <div className={styles.loremIpsumDolorSitAmetCo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
      </div>
      <div className={styles.loremIpsumDolorSitAmetCo1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
      </div>
      <div className={styles.loremIpsumDolorSitAmetCo2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
      </div>
      <div className={styles.loremIpsumDolorSitAmetCo3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed
        tristique mollis vitae, consequat gravida sagittis.
      </div>
      <img
        className={styles.image1174Icon}
        alt=""
        src="../image-11745@2x.png"
      />
    </div>
  );
};

export default Faq;
