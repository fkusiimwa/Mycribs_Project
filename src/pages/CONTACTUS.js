import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CONTACTUS.module.css";

const CONTACTUS = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
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

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.cONTACTUSDiv}>
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
            <div className={styles.contactUsDiv}>Contact us</div>
            <b className={styles.contactUsB}>Contact Us</b>
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
            <img className={styles.groupIcon} alt="" src="../group-171.svg" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv1}>Hostels</div>
            <div className={styles.productsDiv} onClick={onProductsTextClick}>
              About Us
            </div>
            <div className={styles.blogDiv}>{`Blog `}</div>
            <div className={styles.shopDiv}>Contact</div>
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
              src="../uilsearch11.svg"
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
          <div
            className={styles.aboutUsDiv}
            onClick={onAboutUsTextClick}
          >{`About Us `}</div>
          <div className={styles.contactUsDiv1}>Contact Us</div>
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
          <img className={styles.groupIcon1} alt="" src="../group-2054.svg" />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-2054.svg" />
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.groupDiv11}>
          <div className={styles.groupDiv11}>
            <div className={styles.groupDiv11}>
              <b className={styles.aboutUs}>About us</b>
              <b className={styles.contactUsB1}>Contact Us</b>
              <b className={styles.getInTouch}>Get In Touch</b>
              <div className={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </div>
              <div className={styles.loremIpsumDolorSitAmetCo1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupIcon3} alt="" src="../group-94.svg" />
      </div>
      <div className={styles.groupDiv14}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-44.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-45.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-46.svg" />
        <div className={styles.groupDiv15}>
          <div className={styles.tel256750584763Div}>
            <p className={styles.telP}>{`Tel: `}</p>
            <p className={styles.p}>256-750-584-763</p>
          </div>
        </div>
        <div className={styles.groupDiv16}>
          <img className={styles.ellipseIcon2} alt="" src="../group-97.svg" />
          <div className={styles.twitterDiv}>{`Twitter: `}</div>
          <div className={styles.aetotechsDiv}>@aetotechs</div>
        </div>
        <div className={styles.groupDiv17}>
          <div
            className={styles.plot32ChurchRoad}
          >{`24223  Plot 32 Church Road `}</div>
          <div className={styles.entebbeUgandaDiv}>Entebbe Uganda</div>
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.tel256750584763Div}>{`Email: `}</div>
          <div className={styles.mycribsaetotechscomDiv}>
            mycribs@aetotechs.com
          </div>
        </div>
      </div>
      <div className={styles.groupDiv19}>
        <div className={styles.g10Div}>
          <img className={styles.path12Icon} alt="" />
          <img className={styles.g14Icon} alt="" src="../g14.svg" />
          <img className={styles.g574Icon} alt="" src="../g574.svg" />
          <div className={styles.div3}>24/7</div>
        </div>
        <img className={styles.g404Icon} alt="" src="../g404.svg" />
        <img className={styles.groupIcon5} alt="" src="../group-119.svg" />
        <img className={styles.groupIcon6} alt="" src="../group-121.svg" />
        <img className={styles.groupIcon7} alt="" src="../group-120.svg" />
        <img className={styles.groupIcon8} alt="" src="../group-1191.svg" />
        <img className={styles.ellipseIcon3} alt="" src="../ellipse-48.svg" />
        <img className={styles.ellipseIcon4} alt="" src="../ellipse-53.svg" />
        <img className={styles.ellipseIcon5} alt="" src="../ellipse-49.svg" />
        <img className={styles.ellipseIcon6} alt="" src="../ellipse-49.svg" />
        <img className={styles.ellipseIcon7} alt="" src="../ellipse-50.svg" />
        <img className={styles.ellipseIcon8} alt="" src="../ellipse-57.svg" />
        <img className={styles.ellipseIcon9} alt="" src="../ellipse-51.svg" />
        <img className={styles.ellipseIcon10} alt="" src="../ellipse-51.svg" />
        <img className={styles.ellipseIcon11} alt="" src="../ellipse-51.svg" />
        <img className={styles.ellipseIcon12} alt="" src="../ellipse-51.svg" />
        <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector-4.svg" />
        <img className={styles.ellipseIcon13} alt="" src="../ellipse-52.svg" />
        <img className={styles.ellipseIcon14} alt="" src="../ellipse-59.svg" />
      </div>
      <div className={styles.groupDiv20}>
        <div className={styles.groupDiv21}>
          <div className={styles.groupDiv22}>
            <div className={styles.rectangleDiv8} />
            <div className={styles.yourNameDiv}>Your Name*</div>
          </div>
          <div className={styles.groupDiv23}>
            <div className={styles.rectangleDiv8} />
            <div className={styles.subjectDiv}>Subject*</div>
          </div>
          <div className={styles.groupDiv24}>
            <div className={styles.rectangleDiv8} />
            <div className={styles.typeYourMessege}>Type Your Messege*</div>
          </div>
          <div className={styles.groupDiv25}>
            <div className={styles.rectangleDiv8} />
            <div className={styles.yourNameDiv}>Your E-mail</div>
          </div>
        </div>
        <div className={styles.groupDiv26}>
          <div className={styles.groupDiv27}>
            <div className={styles.rectangleDiv12} />
          </div>
          <div className={styles.sendMailDiv}>Send Mail</div>
        </div>
      </div>
    </div>
  );
};

export default CONTACTUS;
