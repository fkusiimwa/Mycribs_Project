import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShopLeftSidebar.module.css";

const ShopLeftSidebar = () => {
  const navigate = useNavigate();

  const onPagesText1Click = useCallback(() => {
    navigate("/shop-list");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFaSolidlistIconClick = useCallback(() => {
    navigate("/shop-list");
  }, [navigate]);

  const onRectangle12Click = useCallback(() => {
    navigate("/product-details");
  }, [navigate]);

  return (
    <div className={styles.shopLeftSidebar}>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-115.svg"
        />
        <div className={styles.groupDiv1}>
          <div className={styles.div}>.</div>
          <div className={styles.div1}>.</div>
          <div className={styles.homeDiv}>{`Home `}</div>
          <div className={styles.pagesDiv}>Pages</div>
          <div className={styles.hostelsSIdebarView}>
            Hostels - SIdebar View
          </div>
          <b className={styles.hostelsSidebarView}>Hostels - Sidebar View</b>
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
            src="../uilenvelopealt4.svg"
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
          <div className={styles.shopDiv}>{`Contact `}</div>
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
            src="../uilsearch12.svg"
          />
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
          <div className={styles.rectangleDiv4} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv5} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.groupDiv6}>
            <div className={styles.rectangleDiv6} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-20523.svg" />
        </div>
      </div>
      <div className={styles.groupDiv7}>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-20523.svg" />
      </div>
      <div className={styles.pageSortBy}>
        <b className={styles.ecommerceAcceoriesFashion}>Hostels</b>
        <div className={styles.about9620Results062Seco}>
          About 9,620 results (0.62 seconds)
        </div>
        <div className={styles.perPageDiv}>Per Page:</div>
        <div className={styles.sortByDiv}>Sort By:</div>
        <div className={styles.viewDiv}>View:</div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv8} />
        </div>
        <img
          className={styles.claritygridViewSolidIcon}
          alt=""
          src="../claritygridviewsolid.svg"
        />
        <img
          className={styles.faSolidlistIcon}
          alt=""
          src="../fasolidlist.svg"
          onClick={onFaSolidlistIconClick}
        />
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.groupDiv6}>
            <img
              className={styles.akarIconschevronDown1}
              alt=""
              src="../akariconschevrondown13.svg"
            />
            <div className={styles.bestMatchDiv}>Price</div>
          </div>
        </div>
        <div className={styles.groupDiv13}>
          <div className={styles.rectangleDiv8} />
        </div>
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv11} onClick={onRectangle12Click} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-32@2x.png"
        />
        <img className={styles.groupIcon3} alt="" src="../group-35.svg" />
        <b className={styles.stMarysHostel}>St. Mary’s Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon1}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon2}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon3}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon4}
          alt=""
          src="../antdesignstarfilled14.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 550,000</div>
      </div>
      <div className={styles.groupDiv15}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-321@2x.png"
        />
        <img className={styles.groupIcon3} alt="" src="../group-351.svg" />
        <b className={styles.stMarysHostel}>B Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon5}
          alt=""
          src="../antdesignstarfilled.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon6}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon7}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon8}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon9}
          alt=""
          src="../antdesignstarfilled14.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 450,000</div>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-322@2x.png"
        />
        <img className={styles.groupIcon3} alt="" src="../group-352.svg" />
        <b className={styles.stMarysHostel}>C Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon10}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon11}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon12}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon13}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon14}
          alt=""
          src="../antdesignstarfilled24.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Double - 350,000</div>
      </div>
      <div className={styles.groupDiv17}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-323@2x.png"
        />
        <img className={styles.groupIcon3} alt="" src="../group-353.svg" />
        <b className={styles.stMarysHostel}>D Hostel</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon15}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon16}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon17}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon18}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon19}
          alt=""
          src="../antdesignstarfilled24.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 650,000</div>
      </div>
      <div className={styles.groupDiv18}>
        <div className={styles.div3}>(32)</div>
        <b className={styles.sofaB}>Sofa</b>
        <b className={styles.armB}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-324@2x.png"
        />
        <img className={styles.groupIcon3} alt="" src="../group-354.svg" />
        <b className={styles.stMarysHostel}>{`E Hostel `}</b>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon20}
          alt=""
          src="../antdesignstarfilled30.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon21}
          alt=""
          src="../antdesignstarfilled30.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon22}
          alt=""
          src="../antdesignstarfilled30.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon23}
          alt=""
          src="../antdesignstarfilled30.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon24}
          alt=""
          src="../antdesignstarfilled34.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single550000}>Single - 600,000</div>
      </div>
      <div className={styles.groupDiv19}>
        <div className={styles.div8}>(32)</div>
        <b className={styles.sofaB5}>Sofa</b>
        <b className={styles.armB5}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon6}
          alt=""
          src="../rectangle-325@2x.png"
        />
        <img className={styles.groupIcon8} alt="" src="../group-355.svg" />
        <b className={styles.fHostelB}>F Hostel</b>
        <img className={styles.ellipseIcon15} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon16} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon17} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon25}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon26}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon27}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon28}
          alt=""
          src="../antdesignstarfilled20.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon29}
          alt=""
          src="../antdesignstarfilled24.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single340000}>Single - 340,000</div>
      </div>
      <div className={styles.groupDiv20}>
        <div className={styles.div8}>(32)</div>
        <b className={styles.sofaB5}>Sofa</b>
        <b className={styles.armB5}>arm</b>
        <div className={styles.rectangleDiv12} />
        <img
          className={styles.rectangleIcon6}
          alt=""
          src="../rectangle-326@2x.png"
        />
        <img className={styles.groupIcon8} alt="" src="../group-356.svg" />
        <b className={styles.fHostelB}>G Hostel</b>
        <img className={styles.ellipseIcon15} alt="" src="../ellipse-24.svg" />
        <img className={styles.ellipseIcon16} alt="" src="../ellipse-25.svg" />
        <img className={styles.ellipseIcon17} alt="" src="../ellipse-26.svg" />
        <img
          className={styles.antDesignstarFilledIcon25}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon26}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon27}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon28}
          alt=""
          src="../antdesignstarfilled10.svg"
        />
        <img
          className={styles.antDesignstarFilledIcon29}
          alt=""
          src="../antdesignstarfilled14.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetCo5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </div>
        <div className={styles.single340000}>Double - 350,000</div>
      </div>
      <b className={styles.reviewsB}>Reviews</b>
      <b className={styles.categoriesB}>Categories</b>
      <b className={styles.priceFilterB}>Price Filter</b>
      <b className={styles.filterByColor}>Filter By Color</b>
      <img className={styles.lineIcon} alt="" src="../line-282.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <div className={styles.lineDiv2} />
      <img className={styles.uilcheckIcon} alt="" src="../uilcheck6.svg" />
      <img className={styles.uilcheckIcon1} alt="" src="../uilcheck7.svg" />
      <img className={styles.uilcheckIcon2} alt="" src="../uilcheck8.svg" />
      <img className={styles.uilcheckIcon3} alt="" src="../uilcheck8.svg" />
      <img className={styles.uilcheckIcon4} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon5} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon6} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon7} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon8} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon9} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon10} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon11} alt="" src="../uilcheck10.svg" />
      <img className={styles.uilcheckIcon12} alt="" src="../uilcheck18.svg" />
      <img className={styles.uilcheckIcon13} alt="" src="../uilcheck18.svg" />
      <img className={styles.uilcheckIcon14} alt="" src="../uilcheck18.svg" />
      <img className={styles.uilcheckIcon15} alt="" src="../uilcheck21.svg" />
      <img className={styles.uilcheckIcon16} alt="" src="../uilcheck22.svg" />
      <img
        className={styles.antDesignstarFilledIcon35}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon36}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon37}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon38}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon39}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon40}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon41}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon42}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon43}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon44}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon45}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon46}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon47}
        alt=""
        src="../antdesignstarfilled45.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon48}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon49}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon50}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon51}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon52}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon53}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <img
        className={styles.antDesignstarFilledIcon54}
        alt=""
        src="../antdesignstarfilled14.svg"
      />
      <div className={styles.div10}>(2341)</div>
      <div className={styles.div11}>(1726)</div>
      <div className={styles.div12}>(258)</div>
      <div className={styles.div13}>(25)</div>
      <div className={styles.rectangleDiv18} />
      <div className={styles.uGX0UGX2000000}>UGX 0 - UGX 2,000,000</div>
      <img className={styles.uilsearchIcon1} alt="" src="../uilsearch13.svg" />
      <img className={styles.ellipseIcon21} alt="" src="../ellipse-71.svg" />
      <img className={styles.ellipseIcon22} alt="" src="../ellipse-72.svg" />
      <img className={styles.ellipseIcon23} alt="" src="../ellipse-73.svg" />
      <img className={styles.ellipseIcon24} alt="" src="../ellipse-74.svg" />
      <img className={styles.ellipseIcon25} alt="" src="../ellipse-75.svg" />
      <img className={styles.ellipseIcon26} alt="" src="../ellipse-76.svg" />
      <div className={styles.blueDiv}>Blue</div>
      <div className={styles.orangeDiv}>Orange</div>
      <div className={styles.brownDiv}>Brown</div>
      <div className={styles.skyDiv}>Sky</div>
      <div className={styles.purpleDiv}>Purple</div>
      <div className={styles.greenDiv}>Green</div>
      <div className={styles.uGX0UGX150000}>UGX 0 - UGX 150,000</div>
      <div className={styles.uGX150000UGX350000}>UGX 150,000 - UGX 350,000</div>
      <div className={styles.uGX150000UGX504000}>UGX 150,000 - UGX 504,000</div>
      <div className={styles.uGX504000}>UGX 504,000 +</div>
      <div className={styles.highEndDiv}>High End</div>
      <div className={styles.singleDiv}>Single</div>
      <div className={styles.doubleDiv}>Double</div>
      <div className={styles.tripleDiv}>Triple</div>
      <div className={styles.mostPopularDiv}>Most popular</div>
      <div className={styles.onlyMensHostels}>Only Mens’ Hostels</div>
      <div className={styles.onlyLadiesHostels}>Only Ladies’ Hostels</div>
      <div className={styles.livelyNeighbourhoodDiv}>Lively Neighbourhood</div>
      <div className={styles.quietNeighbourhoodDiv}>Quiet Neighbourhood</div>
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
    </div>
  );
};

export default ShopLeftSidebar;
