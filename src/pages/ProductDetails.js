import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const navigate = useNavigate();

  const onPagesText2Click = useCallback(() => {
    navigate("/shop-left-sidebar");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.productDetailsDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv1} />
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
          <div className={styles.rectangleDiv2} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv3} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-20510.svg" />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-115.svg"
        />
        <div className={styles.div}>.</div>
        <div className={styles.div1}>.</div>
        <div className={styles.homeDiv}>{`Home `}</div>
        <div className={styles.pagesDiv1}>Pages</div>
        <div className={styles.hostelDetailsDiv}>Hostel Details</div>
        <b className={styles.hostelDetailsB}>Hostel Details</b>
        <div className={styles.headingBarDiv}>
          <div className={styles.rectangleDiv5} />
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
            src="../uilenvelopealt6.svg"
          />
          <img
            className={styles.bxbxPhoneCallIcon}
            alt=""
            src="../bxbxphonecall6.svg"
          />
          <img className={styles.groupIcon1} alt="" src="../group-176.svg" />
        </div>
        <div className={styles.navBarDiv}>
          <div className={styles.pagesDiv2} onClick={onPagesText2Click}>
            Hostels
          </div>
          <div className={styles.productsDiv} onClick={onProductsTextClick}>
            About Us
          </div>
          <div className={styles.blogDiv2}>{`Blog `}</div>
          <div className={styles.shopDiv}>Contact</div>
          <div className={styles.contactDiv}>Contact</div>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv6} />
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv7} />
            </div>
          </div>
          <b className={styles.hektoB}>Mycribs</b>
          <div className={styles.groupDiv5} onClick={onGroupContainer4Click}>
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
            src="../uilsearch6.svg"
          />
        </div>
      </div>
      <b className={styles.similarHostelsB}>Similar Hostels</b>
      <div className={styles.groupDiv6}>
        <div className={styles.rectangleDiv8} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-133@2x.png"
        />
      </div>
      <img
        className={styles.rectangleIcon2}
        alt=""
        src="../rectangle-128@2x.png"
      />
      <img
        className={styles.rectangleIcon3}
        alt=""
        src="../rectangle-130@2x.png"
      />
      <img
        className={styles.rectangleIcon4}
        alt=""
        src="../rectangle-131@2x.png"
      />
      <div className={styles.rectangleDiv9} />
      <img className={styles.groupIcon2} alt="" src="../group-236.svg" />
      <img
        className={styles.rectangleIcon5}
        alt=""
        src="../rectangle-134@2x.png"
      />
      <img
        className={styles.rectangleIcon6}
        alt=""
        src="../rectangle-136@2x.png"
      />
      <img
        className={styles.rectangleIcon7}
        alt=""
        src="../rectangle-137@2x.png"
      />
      <img
        className={styles.rectangleIcon8}
        alt=""
        src="../rectangle-138@2x.png"
      />
      <div className={styles.categoriesDiv1}>Categories:</div>
      <div className={styles.addToCart}>Add To cart</div>
      <div className={styles.single750000}>Single - 750,000</div>
      <div className={styles.div3}>(22)</div>
      <div className={styles.tagsDiv}>Tags</div>
      <div className={styles.variusTemporDiv}>Varius tempor.</div>
      <div className={styles.moreDetailsDiv}>More details</div>
      <div className={styles.groupDiv7}>
        <div className={styles.single650000}>Single - 650,000</div>
        <div className={styles.aHostelDiv}>A Hostel</div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.groupDiv9}>
          <div className={styles.groupDiv10}>
            <div className={styles.single560000}>Single - 560,000</div>
          </div>
          <div className={styles.aHostelDiv}>{`B Hostel `}</div>
        </div>
      </div>
      <div className={styles.groupDiv11}>
        <div className={styles.single6500001}>Single - 650,000</div>
        <div className={styles.cHostelDiv}>C Hostel</div>
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.single6500001}>SIngle - 540,000</div>
        <div className={styles.cHostelDiv}>{`D Hostel `}</div>
      </div>
      <div className={styles.descriptionDiv}>Description</div>
      <div className={styles.additionalInfoDiv}>Additional Info</div>
      <div className={styles.shareDiv}>Share</div>
      <div className={styles.stMarysHostel}>St. Mary’s Hostel</div>
      <div className={styles.amenitiesDiv}>Amenities</div>
      <div className={styles.loremIpsumDolorSitAmetCo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
        porttitor purus, et volutpat sit.
      </div>
      <div className={styles.aliquamDisVulputateVulputat}>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
        faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
        est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
        elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
        tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
        Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
        in fringilla vulputate nunc nec. Dui, massa viverr .
      </div>
      <div className={styles.aliquamDisVulputateVulputat1}>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
        nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
        massa viverr .
      </div>
      <div className={styles.aliquamDisVulputateVulputat2}>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
        nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
        massa viverr .
      </div>
      <div className={styles.aliquamDisVulputateVulputat3}>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
        nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
        massa viverr .
      </div>
      <div className={styles.aliquamDisVulputateVulputat4}>
        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu,
        nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
        massa viverr .
      </div>
      <img
        className={styles.akarIconsarrowUp}
        alt=""
        src="../akariconsarrowup.svg"
      />
      <img
        className={styles.akarIconsarrowUp1}
        alt=""
        src="../akariconsarrowup1.svg"
      />
      <img
        className={styles.akarIconsarrowUp2}
        alt=""
        src="../akariconsarrowup.svg"
      />
      <img
        className={styles.akarIconsarrowUp3}
        alt=""
        src="../akariconsarrowup.svg"
      />
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
      <img
        className={styles.antDesignstarFilledIcon}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon1}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon2}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon3}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon4}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon5}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon6}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon7}
        alt=""
        src="../antdesignstarfilled.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon8}
        alt=""
        src="../antdesignstarfilled8.svg"
      />
      <img className={styles.groupIcon3} alt="" src="../group-236.svg" />
      <img
        className={styles.antDesignstarFilledIcon9}
        alt=""
        src="../antdesignstarfilled8.svg"
      />
      <img className={styles.groupIcon4} alt="" src="../group-237.svg" />
      <img className={styles.groupIcon5} alt="" src="../group-20511.svg" />
      <img className={styles.groupIcon6} alt="" src="../group-235.svg" />
      <div className={styles.groupDiv13}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon7} alt="" src="../group-20510.svg" />
      </div>
    </div>
  );
};

export default ProductDetails;
