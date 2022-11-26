import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ABOUTUS.module.css";

const ABOUTUS = () => {
  const navigate = useNavigate();

  const onPagesText2Click = useCallback(() => {
    navigate("/grid-default");
  }, [navigate]);

  const onGroupContainer30Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/single-blog"); 
  }, [navigate]);  //when blog is clicked, switch to the blog

  return (
    <div className={styles.aBOUTUSDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleIcon}>
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
            <div className={styles.aboutUsDiv}>About Us</div>
            <b className={styles.aboutUs}>About Us</b>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv} />
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-56@2x.png"
        />
      </div>
      <div className={styles.groupDiv5}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv6}>
            <b className={styles.knowAboutOurRentalBusiness}>
              Know About Our Rental Business, History
            </b>
            <div className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.contactUsDiv}>Contact us</div>
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.shopexOffersDiv} />
        <div className={styles.groupDiv10}>
          <div className={styles.freeServiceDiv}>Free Service</div>
          <b className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </b>
        </div>
      </div>
      <div className={styles.groupDiv11}>
        <div className={styles.shopexOffersDiv} />
        <div className={styles.groupDiv10}>
          <div className={styles.freeServiceDiv}>Professionalism</div>
          <b className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </b>
        </div>
      </div>
      <div className={styles.groupDiv13}>
        <div className={styles.shopexOffersDiv} />
        <div className={styles.groupDiv10}>
          <div className={styles.freeServiceDiv}>24/7 Support</div>
          <b className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </b>
        </div>
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.groupDiv16}>
          <div className={styles.groupDiv17}>
            <div className={styles.groupDiv17}>
              <div className={styles.shopexOffersDiv} />
              <div className={styles.groupDiv10}>
                <div className={styles.freeServiceDiv}>Safe Payment</div>
                <b className={styles.loremIpsumDolorSitAmetCo1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </b>
              </div>
            </div>
          </div>
          <div className={styles.rectangleDiv2} />
        </div>
        <div className={styles.rectangleDiv3} />
      </div>
      <b className={styles.ourFeaturesB}>Our Features</b>
      <b className={styles.ourClientSay}>Our Client Say!</b>
      <div className={styles.commentsAndImages}>
        <div className={styles.groupDiv20}>
          <div className={styles.groupDiv21}>
            <div className={styles.groupDiv22}>
              <div className={styles.selinaGomezDiv}>Clarisse</div>
              <div className={styles.ceoAtWebecyDigital}>
                Student, Makerere University Kampala
              </div>
            </div>
          </div>
          <b className={styles.loremIpsumDolorSitAmetCo5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </b>
          <div className={styles.groupDiv23}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
            <div className={styles.rectangleDiv6} />
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-200@2x.png" />
      </div>
      <img
        className={styles.freeDelivery1Icon}
        alt=""
        src="../freedelivery-1.svg"
      />
      <img
        className={styles.premiumQuality1Icon}
        alt=""
        src="../premiumquality-1.svg"
      />
      <img
        className={styles.hoursSupport1Icon}
        alt=""
        src="../24hourssupport-1.svg"
      />
      <img className={styles.cashback1Icon} alt="" src="../cashback-1.svg" />
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv}>My Account</div>
          <div className={styles.blogDiv}>Blog</div>
          <div className={styles.latestNewsDiv}>Latest News</div>
          <div className={styles.allCategoriesDiv}>All Categories</div>
          <div className={styles.newestAdditionsDiv}>Newest Additions</div>
          <div className={styles.discountsDiv}>Discounts</div>
          <div className={styles.bookingHistoryDiv}>Booking History</div>
          <div className={styles.ordersHistoryDiv}>Orders History</div>
          <div className={styles.blogDiv1}>Blog</div>
          <div className={styles.aboutUsDiv1}>{`About Us `}</div>
          <div className={styles.contactUsDiv1}>Contact Us</div>
          <b className={styles.mycribs}>Mycribs</b>
          <div className={styles.categoriesDiv}>Categories</div>
          <div className={styles.myPageDiv}>My Page</div>
          <div className={styles.pagesDiv1}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv8} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv9} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv24}>
          <div className={styles.groupDiv22}>
            <div className={styles.rectangleDiv10} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-20517.svg" />
        </div>
      </div>
      <div className={styles.groupDiv26}>
        <div className={styles.groupDiv22}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-20517.svg" />
      </div>
      <div className={styles.headingBarDiv}>
        <div className={styles.rectangleDiv12} />
        <div className={styles.englishDiv}>English</div>
        <div className={styles.uSDDiv}>USD</div>
        <div className={styles.loginDiv}>Login</div>
        <div className={styles.wishlistDiv}>Wishlist</div>
        <div className={styles.mhhasanulgmailcomDiv}>mycribs@aetotechs.com</div>
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
        <img className={styles.groupIcon3} alt="" src="../group-171.svg" />
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.pagesDiv2} onClick={onPagesText2Click}>
          Hostels
        </div>
        <div className={styles.productsDiv}>About Us</div>
        <div className={styles.blogDiv2}>{`Blog `}</div>
        <div className={styles.shopDiv}>Contact</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.groupDiv28}>
          <div className={styles.rectangleDiv13} />
          <div className={styles.groupDiv29}>
            <div className={styles.rectangleDiv14} />
          </div>
        </div>
        <b className={styles.hektoB}>Mycribs</b>
        <div className={styles.groupDiv30} onClick={onGroupContainer30Click}>
          <div className={styles.homeDiv1}>Home</div>
        </div>
        <img
          className={styles.akarIconschevronDown}
          alt=""
          src="../akariconschevrondown.svg"
        />
        <img className={styles.uilsearchIcon} alt="" src="../uilsearch9.svg" />
      </div>
    </div>
  );
};

export default ABOUTUS;
