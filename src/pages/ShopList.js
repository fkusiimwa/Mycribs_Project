import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShopList.module.css";

const ShopList = () => {
  const navigate = useNavigate();

  const onPagesText1Click = useCallback(() => {
    navigate("/shop-left-sidebar");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/product-details");
  }, [navigate]);

  return (
    <div className={styles.shopListDiv}>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-115.svg"
        />
        <div className={styles.groupDiv1}>
          <div className={styles.div}>.</div>
          <div className={styles.hostelsListDiv}>.</div>
          <div className={styles.homeDiv}>{`Home `}</div>
          <div className={styles.pagesDiv}>Pages</div>
          <div className={styles.hostelsListDiv}>Hostels List</div>
          <b className={styles.hostelsListView}>Hostels - List View</b>
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
            src="../uilenvelopealt13.svg"
          />
          <img
            className={styles.bxbxPhoneCallIcon}
            alt=""
            src="../bxbxphonecall4.svg"
          />
          <img className={styles.groupIcon} alt="" src="../group-174.svg" />
        </div>
        <div className={styles.navBarDiv}>
          <div className={styles.pagesDiv1} onClick={onPagesText1Click}>
            Hostels
          </div>
          <div className={styles.productsDiv}>About Us</div>
          <div className={styles.blogDiv}>{`Blog `}</div>
          <div className={styles.shopDiv}>Contact</div>
          <div className={styles.contactDiv}>Contact</div>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv2} />
            </div>
          </div>
          <b className={styles.hektoB}>Mycribs</b>
          <div className={styles.groupDiv4} onClick={onGroupContainer3Click}>
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
            src="../uilsearch14.svg"
          />
        </div>
      </div>
      <div className={styles.pageSortBy}>
        <b className={styles.ecommerceAcceoriesFashion}>Hostels</b>
        <div className={styles.about9620Results062Seco}>
          About 9,620 results (0.62 seconds)
        </div>
        <div className={styles.perPageDiv}>Per Page:</div>
        <div className={styles.sortByDiv}>Sort By:</div>
        <div className={styles.viewDiv}>View:</div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv3} />
        </div>
        <img
          className={styles.claritygridViewSolidIcon}
          alt=""
          src="../claritygridviewsolid1.svg"
        />
        <img
          className={styles.faSolidlistIcon}
          alt=""
          src="../fasolidlist1.svg"
        />
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv3} />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.groupDiv8}>
            <img
              className={styles.akarIconschevronDown1}
              alt=""
              src="../akariconschevrondown13.svg"
            />
            <div className={styles.bestMatchDiv}>Price</div>
          </div>
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv3} />
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv}>My Account</div>
          <div className={styles.blogDiv1}>Blog</div>
          <div className={styles.latestNewsDiv}>Latest News</div>
          <div className={styles.allCategoriesDiv}>All Categories</div>
          <div className={styles.newestAdditionsDiv}>Newest Additions</div>
          <div className={styles.discountsDiv}>Discounts</div>
          <div className={styles.bookingHistoryDiv}>Booking History</div>
          <div className={styles.ordersHistoryDiv}>Orders History</div>
          <div className={styles.blogDiv2}>Blog</div>
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
          <div className={styles.rectangleDiv7} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv8} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv9} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-20525.svg" />
        </div>
      </div>
      <div className={styles.groupDiv12} onClick={onGroupContainer12Click}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-327@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-357.svg" />
        <b className={styles.stMarysHostel}>St. Mary’s Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon}
          alt=""
          src="../antdesignstarfilled65.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon1}
          alt=""
          src="../antdesignstarfilled66.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon2}
          alt=""
          src="../antdesignstarfilled67.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon3}
          alt=""
          src="../antdesignstarfilled68.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon4}
          alt=""
          src="../antdesignstarfilled69.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 550,000</div>
      </div>
      <div className={styles.groupDiv13}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-328@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-358.svg" />
        <b className={styles.stMarysHostel}>B Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon5}
          alt=""
          src="../antdesignstarfilled70.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon6}
          alt=""
          src="../antdesignstarfilled71.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon7}
          alt=""
          src="../antdesignstarfilled72.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon8}
          alt=""
          src="../antdesignstarfilled73.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon9}
          alt=""
          src="../antdesignstarfilled74.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Double - 350,000</div>
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-329@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-359.svg" />
        <b className={styles.stMarysHostel}>C Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon5}
          alt=""
          src="../antdesignstarfilled75.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon6}
          alt=""
          src="../antdesignstarfilled76.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon7}
          alt=""
          src="../antdesignstarfilled77.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon8}
          alt=""
          src="../antdesignstarfilled78.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon9}
          alt=""
          src="../antdesignstarfilled79.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>SIngle - 750,000</div>
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-3210@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-3510.svg" />
        <b className={styles.stMarysHostel}>D Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon15}
          alt=""
          src="../antdesignstarfilled80.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon16}
          alt=""
          src="../antdesignstarfilled81.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon17}
          alt=""
          src="../antdesignstarfilled82.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon18}
          alt=""
          src="../antdesignstarfilled83.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon19}
          alt=""
          src="../antdesignstarfilled84.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 800,000</div>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-3211@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-3511.svg" />
        <b className={styles.stMarysHostel}>E Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-2411.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-2511.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-2611.svg" />
        <img
          className={styles.antDesignstarFilledIcon15}
          alt=""
          src="../antdesignstarfilled85.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon16}
          alt=""
          src="../antdesignstarfilled86.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon17}
          alt=""
          src="../antdesignstarfilled87.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon18}
          alt=""
          src="../antdesignstarfilled88.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon19}
          alt=""
          src="../antdesignstarfilled89.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Double - 400,000</div>
      </div>
      <div className={styles.groupDiv17}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-3212@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-3512.svg" />
        <b className={styles.stMarysHostel}>F Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon5}
          alt=""
          src="../antdesignstarfilled90.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon6}
          alt=""
          src="../antdesignstarfilled91.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon7}
          alt=""
          src="../antdesignstarfilled92.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon8}
          alt=""
          src="../antdesignstarfilled93.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon9}
          alt=""
          src="../antdesignstarfilled94.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Triple - 450,000</div>
      </div>
      <div className={styles.groupDiv18}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv10} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-3213@2x.png"
        />
        <img className={styles.groupIcon2} alt="" src="../group-3513.svg" />
        <b className={styles.stMarysHostel}>{`P Hostel `}</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-247.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-257.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-267.svg" />
        <img
          className={styles.antDesignstarFilledIcon30}
          alt=""
          src="../antdesignstarfilled95.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon31}
          alt=""
          src="../antdesignstarfilled96.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon32}
          alt=""
          src="../antdesignstarfilled97.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon33}
          alt=""
          src="../antdesignstarfilled98.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon34}
          alt=""
          src="../antdesignstarfilled99.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 650,000</div>
      </div>
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
      <div className={styles.footerDiv2}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.topCategoriesDiv}>Top Categories</div>
          <div className={styles.myAccountDiv}>My Account</div>
          <div className={styles.blogDiv1}>Blog</div>
          <div className={styles.latestNewsDiv}>Latest News</div>
          <div className={styles.allCategoriesDiv}>All Categories</div>
          <div className={styles.newestAdditionsDiv}>Newest Additions</div>
          <div className={styles.discountsDiv}>Discounts</div>
          <div className={styles.bookingHistoryDiv}>Booking History</div>
          <div className={styles.ordersHistoryDiv}>Orders History</div>
          <div className={styles.blogDiv2}>Blog</div>
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
          <div className={styles.rectangleDiv7} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv8} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.groupDiv20}>
            <div className={styles.rectangleDiv9} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon9} alt="" src="../group-20525.svg" />
        </div>
      </div>
    </div>
  );
};

export default ShopList;
