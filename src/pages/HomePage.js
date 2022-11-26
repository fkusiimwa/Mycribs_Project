import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../components/Blog";
import GroupComponent from "../components/GroupComponent";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onLoginTextClick = useCallback(() => {
    navigate("/my-account");
  }, [navigate]);

  const onPagesTextClick = useCallback(() => {
    navigate("/grid-default");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onShopNowButtonClick = useCallback(() => {
    navigate("/grid-default");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText2Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onLeatestBlogContainer1Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onComponent9ContainerClick = useCallback(() => {
    navigate("/product-details");
  }, [navigate]);

  return (
    <div className={styles.homePageDiv}>
      <div className={styles.headingBarDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.englishDiv}>English</div>
        <div className={styles.uSDDiv}>USD</div>
        <div className={styles.loginDiv} onClick={onLoginTextClick}>
          Login
        </div>
        <div className={styles.wishlistDiv}>Wishlist</div>
        <div className={styles.mhhasanulgmailcomDiv}>mycribs@aetotechs.com</div>
        <div className={styles.div}>(256)750 584 763</div>
        <img
          className={styles.uilenvelopeAltIcon}
          alt=""
          src="../uilenvelopealt.svg"
        />
        <img
          className={styles.bxbxPhoneCallIcon}
          alt=""
          src="../bxbxphonecall.svg"
        />
        <img className={styles.groupIcon} alt="" src="../group-17.svg" />
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.pagesDiv} onClick={onPagesTextClick}>
          Hostels
        </div>
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
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv2} />
          </div>
        </div>
        <b className={styles.hektoB}>Mycribs</b>
        <div className={styles.groupDiv2}>
          <div className={styles.homeDiv}>Home</div>
        </div>
        <img
          className={styles.akarIconschevronDown}
          alt=""
          src="../akariconschevrondown.svg"
        />
        <img className={styles.uilsearchIcon} alt="" src="../uilsearch.svg" />
      </div>
      <div className={styles.promotionalDiv}>
        <div className={styles.promotionBgDiv} />
        <div className={styles.promotionalPageNav}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.rectangleDiv4} />
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.sofaPromotionalHeader}>
          <img className={styles.groupIcon1} alt="" src="../group-129.svg" />
          <div className={styles.groupDiv3}>
            <img className={styles.vectorIcon} alt="" src="../vector-14.svg" />
            <b className={styles.offB}>
              <p className={styles.p}>50%</p>
              <p className={styles.offP}> off</p>
            </b>
          </div>
          <img
            className={styles.shellShapedArmchairPinkVelIcon}
            alt=""
            src="../shellshapedarmchairpinkvelvetfabriconeseatersofaforlivingroom-1@2x.png"
          />
        </div>
        <div className={styles.shopNowButton} onClick={onShopNowButtonClick}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.bookNowDiv}>Book Now</div>
        </div>
        <div className={styles.headerTextDiv}>
          <b className={styles.hostelsTailoredToYourBest}>
            <p className={styles.p}>Hostels Tailored To Your</p>
            <p className={styles.offP}>Best Standards</p>
          </b>
          <b className={styles.dontSettleForLessGetAH}>
            <p
              className={styles.p}
            >{`Don’t settle for less. Get a hostel that will make you feel at home.  Book a hostel direct from `}</p>
            <p className={styles.offP}>{`the property owner with us. `}</p>
          </b>
          <b className={styles.bestCastleForYouAndYourF}>
            Best Castle For You and Your Friends....
          </b>
        </div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-62.svg" />
        <img className={styles.image32Icon} alt="" src="../image-32@2x.png" />
      </div>
      <div className={styles.featuredProductDiv}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
          <b className={styles.cantileverChairB}>Olympia Hostel</b>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv9} />
            <div className={styles.rectangleDiv10} />
            <div className={styles.rectangleDiv11} />
          </div>
          <div className={styles.codeY523201}>Kikoni - Single</div>
          <div className={styles.div1}>UGX 600,000</div>
          <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv12} />
          <div className={styles.viewDetailsDiv}>View Details</div>
        </div>
        <img
          className={styles.uilheartAltIcon}
          alt=""
          src="../uilheartalt.svg"
        />
        <img
          className={styles.uilsearchPlusIcon}
          alt=""
          src="../uilsearchplus.svg"
        />
        <img className={styles.groupIcon2} alt="" src="../group-28.svg" />
      </div>
      <div className={styles.component3Div}>
        <div className={styles.rectangleDiv13} />
        <div className={styles.rectangleDiv14} />
        <b className={styles.cantileverChairB1}>Dream Hostel</b>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv9} />
          <div className={styles.rectangleDiv10} />
          <div className={styles.rectangleDiv17} />
        </div>
        <div className={styles.codeY523201}>Banda - Single</div>
        <div className={styles.div1}>UGX 450,000</div>
        <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
        <img
          className={styles.image1167Icon}
          alt=""
          src="../image-1167@2x.png"
        />
        <img
          className={styles.image1168Icon}
          alt=""
          src="../image-1168@2x.png"
        />
        <img
          className={styles.image1169Icon}
          alt=""
          src="../image-1169@2x.png"
        />
      </div>
      <div className={styles.component4Div}>
        <div className={styles.rectangleDiv13} />
        <div className={styles.rectangleDiv14} />
        <b className={styles.cantileverChairB1}>Madonna Hostel</b>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv9} />
          <div className={styles.rectangleDiv10} />
          <div className={styles.rectangleDiv17} />
        </div>
        <div className={styles.codeY523201}>Kyambogo - Single</div>
        <div className={styles.div1}>UGX 500,000</div>
        <img className={styles.image3Icon1} alt="" src="../image-3@2x.png" />
        <img
          className={styles.image1167Icon}
          alt=""
          src="../image-1167@2x.png"
        />
        <img
          className={styles.image1168Icon}
          alt=""
          src="../image-1168@2x.png"
        />
        <img
          className={styles.image1169Icon1}
          alt=""
          src="../image-1169@2x.png"
        />
      </div>
      <div className={styles.featuredProductDiv1}>
        <div className={styles.rectangleDiv13} />
        <div className={styles.rectangleDiv14} />
        <b className={styles.cantileverChairB1}>Nana Hostel</b>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv9} />
          <div className={styles.rectangleDiv10} />
          <div className={styles.rectangleDiv17} />
        </div>
        <div className={styles.codeY523201}>Kikoni - Double</div>
        <div className={styles.div1}>UGX 500,000</div>
        <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
        <img
          className={styles.image1167Icon}
          alt=""
          src="../image-1167@2x.png"
        />
        <img
          className={styles.image1168Icon2}
          alt=""
          src="../image-1168@2x.png"
        />
        <img
          className={styles.image1169Icon1}
          alt=""
          src="../image-1169@2x.png"
        />
      </div>
      <div className={styles.whatShopexOffer}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.shopexOffersDiv} />
          <div className={styles.groupDiv11}>
            <div className={styles.supportDiv}>Free Service</div>
            <b className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.whatShopexOffer1}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.shopexOffersDiv} />
          <div className={styles.groupDiv11}>
            <div className={styles.supportDiv}>Safe Payment</div>
            <b className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.whatShopexOffer2}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.shopexOffersDiv} />
          <div className={styles.groupDiv11}>
            <div className={styles.supportDiv}>Professionalism</div>
            <b className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.whatShopexOffer3}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.shopexOffersDiv} />
          <div className={styles.groupDiv11}>
            <div className={styles.supportDiv}>24/7 Support</div>
            <b className={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </b>
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv28} />
      <div className={styles.uniqueFeatureSofa}>
        <div className={styles.groupDiv18}>
          <div className={styles.executiveApartmentsSingle}>
            Executive Apartments - Single
          </div>
          <div className={styles.uGX1200000Div}>UGX 1,200,000</div>
          <img className={styles.ellipseIcon1} alt="" src="../ellipse-65.svg" />
          <img className={styles.ellipseIcon2} alt="" src="../ellipse-66.svg" />
          <img className={styles.ellipseIcon3} alt="" src="../ellipse-67.svg" />
          <b className={styles.highEndHostelsInOurCatalo}>
            <p className={styles.p}>{`High End Hostels In Our `}</p>
            <p className={styles.offP}>Catalogue</p>
          </b>
          <div className={styles.safeAndSecure}>Safe and secure</div>
          <div className={styles.aQuietOrLivelyNeighbourhoo}>
            A quiet or lively neighbourhood
          </div>
          <div className={styles.novelStateOfTheArtDesign}>
            <p
              className={styles.p}
            >{`Novel, state-of the art designs and architecture of the buildings `}</p>
            <p className={styles.offP}>with working infrastructure</p>
          </div>
          <div className={styles.groupDiv19}>
            <img
              className={styles.ellipseIcon4}
              alt=""
              src="../ellipse-63.svg"
            />
            <img
              className={styles.homeStylishClubSofaChairPIcon}
              alt=""
              src="../homestylishclubsofachairpleatedsofaarmchairwithgoldenlegs-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.shopNowButton1}>
          <div className={styles.topCatagoriesTopCatagories}>
            <div className={styles.rectangleDiv29} />
            <div className={styles.bookDiv}>Book</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv21}>
        <div className={styles.groupForm}>
          <div className={styles.offAmonfOffers} />
          <div className={styles.groupDiv23}>
            <div className={styles.offInAllBookings}>
              23% off in all bookings
            </div>
            <div className={styles.bookNowDiv1}>Book Now</div>
          </div>
        </div>
        <img
          className={styles.image1162Icon}
          alt=""
          src="../image-1162@2x.png"
        />
      </div>
      <div className={styles.groupDiv24}>
        <form className={styles.groupForm}>
          <div className={styles.offAmonfOffers1} />
          <div className={styles.groupDiv23}>
            <div className={styles.offInAllBookings1}>
              23% off in all bookings
            </div>
            <div className={styles.viewCollectionDiv}>View Collection</div>
          </div>
        </form>
        <img
          className={styles.image1161Icon}
          alt=""
          src="../image-1161@2x.png"
        />
      </div>
      <div className={styles.discountSofaDiv}>
        <b className={styles.discountOfAllProducts}>
          20% Discount Off Every New Tenant
        </b>
        <div className={styles.eamsSofaCompact}>A home away from home</div>
        <div className={styles.groupDiv26}>
          <div className={styles.topCatagoriesTopCatagories}>
            <div className={styles.topCatagoriesTopCatagories}>
              <div className={styles.rectangleDiv29} />
            </div>
          </div>
          <div className={styles.shopNowDiv}>Book Now</div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCo4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </div>
        <div className={styles.materialExposeLikeMetals}>
          Guaranteed Security
        </div>
        <div className={styles.simpleNeutralColours}>Close to main road</div>
        <div className={styles.materialExposeLikeMetals1}>Affordable Rates</div>
        <div className={styles.clearLinesAndGeomatricFigu}>
          Lively Neighbourhood
        </div>
        <img className={styles.vectorIcon1} alt="" src="../vector.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
        <div className={styles.groupDiv28}>
          <img className={styles.ellipseIcon5} alt="" src="../ellipse-64.svg" />
          <img
            className={styles.tortuga01B1Icon}
            alt=""
            src="../tortuga01b-1@2x.png"
          />
        </div>
        <img className={styles.checkIcon} alt="" src="../check.svg" />
        <img className={styles.checkIcon1} alt="" src="../check.svg" />
      </div>
      <div className={styles.groupDiv29}>
        <div className={styles.groupDiv30}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-102@2x.png"
          />
          <div className={styles.groupDiv31}>
            <b className={styles.subscribeToOurNewsletterTo}>
              <p
                className={styles.p}
              >{`Subscribe To Our Newsletter to Get the Latest Updates `}</p>
              <p className={styles.offP}>0n Hostels In Uganda</p>
            </b>
            <div className={styles.groupDiv32}>
              <div className={styles.topCatagoriesTopCatagories}>
                <div className={styles.topCatagoriesTopCatagories}>
                  <div className={styles.rectangleDiv29} />
                </div>
              </div>
              <div className={styles.subscribeDiv}>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv32} />
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
          <div className={styles.pagesDiv1}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv33} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv34} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv34}>
          <div className={styles.topCatagoriesTopCatagories}>
            <div className={styles.rectangleDiv35} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon3} alt="" src="../group-205.svg" />
        </div>
      </div>
      <div className={styles.promotionalPageNav1}>
        <div className={styles.rectangleDiv36} />
        <div className={styles.rectangleDiv37} />
        <div className={styles.rectangleDiv38} />
      </div>
      <div className={styles.groupDiv36}>
        <div className={styles.rectangleDiv39} />
        <div className={styles.rectangleDiv40} />
        <div className={styles.rectangleDiv41} />
        <div className={styles.rectangleDiv42} />
      </div>
      <b className={styles.featuredHostelsB}>Featured Hostels</b>
      <b className={styles.newestAdditionsB}>Newest Additions</b>
      <b className={styles.topCategoriesB}>Top Categories</b>
      <b className={styles.trendingHostelsB}>Trending Hostels</b>
      <b className={styles.hostelOfTheWeek}>Hostel of the Week</b>
      <b className={styles.whatMycribsOffers}>What Mycribs Offers!</b>
      <b className={styles.ourBlog}>Our Blog</b>
      <div className={styles.groupDiv37}>
        <div className={styles.brandNewDiv}>Brand New</div>
        <div className={styles.hotCakeDiv}>Hot Cake</div>
        <div className={styles.featuredDiv}>Featured</div>
        <div className={styles.specialOfferDiv}>Special Offer</div>
        <div className={styles.lineDiv} />
      </div>
      <div className={styles.trendingProductsDiv}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv43} />
          <div className={styles.maskGroupDiv} />
        </div>
        <div className={styles.groupDiv39}>
          <b className={styles.cantileverChairB4}>Mirembe Hostel</b>
          <div className={styles.groupDiv40}>
            <div className={styles.div5}>$42.00</div>
            <div className={styles.div6}>{`  UGX 550,000 `}</div>
          </div>
        </div>
        <div className={styles.boxForImage}>
          <img
            className={styles.image32Icon1}
            alt=""
            src="../image-321@2x.png"
          />
          <img
            className={styles.image31Icon}
            alt=""
            src="../image-311@2x.png"
          />
          <img
            className={styles.image1170Icon}
            alt=""
            src="../image-1170@2x.png"
          />
          <img
            className={styles.image1171Icon}
            alt=""
            src="../image-1171@2x.png"
          />
        </div>
      </div>
      <div className={styles.trendingProductsDiv1}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv43} />
          <div className={styles.maskGroupDiv} />
        </div>
        <div className={styles.groupDiv42}>
          <b className={styles.cantileverChairB5}>London Hostel</b>
          <div className={styles.groupDiv43}>
            <div className={styles.div7}>$42.00</div>
            <div className={styles.div6}>{`UGX 480,000 `}</div>
          </div>
        </div>
        <div className={styles.boxForImage}>
          <img
            className={styles.image32Icon1}
            alt=""
            src="../image-321@2x.png"
          />
          <img
            className={styles.image31Icon}
            alt=""
            src="../image-311@2x.png"
          />
          <img
            className={styles.image1170Icon1}
            alt=""
            src="../image-1170@2x.png"
          />
          <img
            className={styles.image1171Icon1}
            alt=""
            src="../image-1171@2x.png"
          />
        </div>
      </div>
      <div className={styles.trendingProductsDiv2}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv43} />
          <div className={styles.maskGroupDiv} />
        </div>
        <div className={styles.groupDiv45}>
          <b className={styles.cantileverChairB6}>Notre Dame Hostel</b>
          <div className={styles.groupDiv46}>
            <div className={styles.div9}>$42.0</div>
            <div className={styles.div6}>UGX 300,000</div>
          </div>
        </div>
        <div className={styles.boxForImage}>
          <img
            className={styles.image32Icon1}
            alt=""
            src="../image-321@2x.png"
          />
          <img
            className={styles.image31Icon2}
            alt=""
            src="../image-311@2x.png"
          />
          <img
            className={styles.image1170Icon}
            alt=""
            src="../image-1170@2x.png"
          />
          <img
            className={styles.image1171Icon1}
            alt=""
            src="../image-1171@2x.png"
          />
        </div>
      </div>
      <div className={styles.trendingProductsDiv3}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv43} />
          <div className={styles.maskGroupDiv} />
        </div>
        <div className={styles.groupDiv48}>
          <b className={styles.cantileverChairB7}>Erica Hostel</b>
          <div className={styles.groupDiv49}>
            <div className={styles.div11}>$42.00</div>
            <div className={styles.div6}>UGX 450,000</div>
          </div>
        </div>
        <div className={styles.boxForImage}>
          <img
            className={styles.image32Icon4}
            alt=""
            src="../image-321@2x.png"
          />
          <img
            className={styles.image31Icon}
            alt=""
            src="../image-311@2x.png"
          />
          <img
            className={styles.image1170Icon}
            alt=""
            src="../image-1170@2x.png"
          />
          <img
            className={styles.image1171Icon1}
            alt=""
            src="../image-1171@2x.png"
          />
        </div>
      </div>
      <div className={styles.topCatagoriesDiv}>
        <img
          className={styles.topCategoriesIcon}
          alt=""
          src="../top-categories.svg"
        />
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.groupDiv50}>
            <img
              className={styles.topCategoriesIcon1}
              alt=""
              src="../top-categories1.svg"
            />
            <div className={styles.latesProductDiv}>
              <div className={styles.miniDiv} />
              <div className={styles.lCWDiv}>{`Executive `}</div>
              <div className={styles.chairDiv}>Chair</div>
              <div className={styles.div13}>USD 300 - USD 3000</div>
            </div>
          </div>
          <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
        </div>
        <img className={styles.image23Icon} alt="" src="../image-23@2x.png" />
        <div className={styles.groupDiv51}>
          <div className={styles.rectangleDiv12} />
          <div className={styles.viewShopDiv}>View Shop</div>
        </div>
      </div>
      <div className={styles.topCatagoriesDiv1}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.groupDiv50}>
            <img
              className={styles.topCategoriesIcon1}
              alt=""
              src="../top-categories2.svg"
            />
            <div className={styles.latesProductDiv1}>
              <div className={styles.miniDiv1}>Mni</div>
              <div className={styles.lCWDiv1}>Single</div>
              <div className={styles.chairDiv1}>Chair</div>
              <div className={styles.div13}>UGX 500,000 - UGX 1,000,000</div>
            </div>
          </div>
          <img
            className={styles.image20Icon1}
            alt=""
            src="../image-20@2x.png"
          />
          <img
            className={styles.image1171Icon4}
            alt=""
            src="../image-11714@2x.png"
          />
          <img
            className={styles.image1168Icon3}
            alt=""
            src="../image-11683@2x.png"
          />
        </div>
      </div>
      <div className={styles.topCatagoriesDiv2}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.groupDiv50}>
            <img
              className={styles.topCategoriesIcon1}
              alt=""
              src="../top-categories3.svg"
            />
            <div className={styles.latesProductDiv2}>
              <div className={styles.miniDiv2}>Mini</div>
              <div className={styles.lCWDiv2}>Double</div>
              <div className={styles.chairDiv2}>Chair</div>
              <div className={styles.div13}>UGX 300,000 - UGX 500,000</div>
            </div>
          </div>
          <img
            className={styles.image20Icon1}
            alt=""
            src="../image-20@2x.png"
          />
          <img
            className={styles.image1171Icon5}
            alt=""
            src="../image-11714@2x.png"
          />
          <img
            className={styles.image1168Icon4}
            alt=""
            src="../image-11683@2x.png"
          />
        </div>
      </div>
      <div className={styles.topCatagoriesDiv3}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.groupDiv50}>
            <img
              className={styles.topCategoriesIcon1}
              alt=""
              src="../top-categories4.svg"
            />
            <div className={styles.latesProductDiv3}>
              <div className={styles.miniDiv3}>Mini</div>
              <div className={styles.lCWDiv3}>{`Triple `}</div>
              <div className={styles.chairDiv3}>Chair</div>
              <div className={styles.div13}>UGX 200,000 - UGX 400,000</div>
            </div>
          </div>
          <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
          <img
            className={styles.image1171Icon4}
            alt=""
            src="../image-11714@2x.png"
          />
          <img
            className={styles.image1168Icon4}
            alt=""
            src="../image-11683@2x.png"
          />
        </div>
      </div>
      <div className={styles.leatestBlogDiv}>
        <div className={styles.groupDiv55}>
          <Blog />
          <div className={styles.blogDiv3} />
          <b className={styles.topEsssentialTrendsIn2021}>
            Top 10 Hostels in Uganda
          </b>
          <img
            className={styles.uilcalendarAltIcon}
            alt=""
            src="../uilcalendaralt.svg"
          />
          <div className={styles.august2020Div}>21 August,2020</div>
          <div className={styles.groupDiv56}>
            <div className={styles.saberAliDiv}>Kusiimwa</div>
            <img className={styles.vectorIcon3} alt="" src="../vector2.svg" />
          </div>
        </div>
        <div className={styles.moreOffThisLessHelloSamla}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipi
          </p>
          <p className={styles.p}>scing elit. Lorem ipsum dolor sit amet.</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.offP}>{` `}</p>
        </div>
        <div className={styles.readMoreDiv}>Read More</div>
        <div className={styles.frameDiv}>
          <img
            className={styles.dcYhvbHVMIcon}
            alt=""
            src="../2dcyhvbhvm@2x.png"
          />
          <img
            className={styles.tortuga01B1Icon}
            alt=""
            src="../jiujvqe2zhg@2x.png"
          />
        </div>
      </div>
      <div
        className={styles.leatestBlogDiv1}
        onClick={onLeatestBlogContainer1Click}
      >
        <div className={styles.groupDiv55}>
          <div className={styles.blogDiv4} />
          <div className={styles.blogDiv3} />
          <b className={styles.topEsssentialTrendsIn2021}>
            What to look for in a hostel
          </b>
          <img
            className={styles.uilcalendarAltIcon}
            alt=""
            src="../uilcalendaralt1.svg"
          />
          <div className={styles.august2020Div}>21 August,2020</div>
          <div className={styles.groupDiv58}>
            <div className={styles.saberAliDiv1}>{`Chris `}</div>
            <img className={styles.vectorIcon4} alt="" src="../vector2.svg" />
          </div>
        </div>
        <div className={styles.moreOffThisLessHelloSamla}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipi
          </p>
          <p className={styles.p}>scing elit. Lorem ipsum dolor sit amet.</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.offP}>{` `}</p>
        </div>
        <div className={styles.readMoreDiv}>Read More</div>
        <div className={styles.frameDiv}>
          <img
            className={styles.tortuga01B1Icon}
            alt=""
            src="../2dcyhvbhvm@2x.png"
          />
          <img
            className={styles.dcYhvbHVMIcon}
            alt=""
            src="../jiujvqe2zhg@2x.png"
          />
        </div>
      </div>
      <div className={styles.leatestBlogDiv2}>
        <div className={styles.groupDiv55}>
          <div className={styles.blogDiv4} />
          <div className={styles.blogDiv3} />
          <b
            className={styles.topEssentialTrendsIn2021}
          >{`Nana Hostel Vs Olympia Hostel `}</b>
          <img
            className={styles.uilcalendarAltIcon}
            alt=""
            src="../uilcalendaralt2.svg"
          />
          <div className={styles.august2020Div}>21 August,2020</div>
          <div className={styles.groupDiv60}>
            <div className={styles.surfauxionDiv}>Sharon</div>
            <img className={styles.vectorIcon5} alt="" src="../vector2.svg" />
          </div>
        </div>
        <div className={styles.moreOffThisLessHelloSamla}>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipi
          </p>
          <p className={styles.p}>scing elit. Lorem ipsum dolor sit amet.</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.offP}>{` `}</p>
        </div>
        <div className={styles.readMoreDiv2}>Read More</div>
        <div className={styles.frameDiv}>
          <img
            className={styles.tortuga01B1Icon}
            alt=""
            src="../2dcyhvbhvm@2x.png"
          />
          <img
            className={styles.tortuga01B1Icon}
            alt=""
            src="../2dcyhvbhvm3@2x.png"
          />
        </div>
      </div>
      <div className={styles.component8Div}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.comfortHandyCraft}>Bavana Hostel - Single</div>
          <div className={styles.div17}>UGX 650,000</div>
          <div className={styles.div18}>$65.00</div>
          <img className={styles.lineIcon} alt="" src="../line-2.svg" />
          <div className={styles.frameDiv3}>
            <div className={styles.groupDiv62}>
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../vector-1.svg"
              />
              <div className={styles.saleDiv}>Sale</div>
            </div>
            <img
              className={styles.uilheartAltIcon1}
              alt=""
              src="../uilheartalt1.svg"
            />
            <img
              className={styles.uilsearchPlusIcon1}
              alt=""
              src="../uilsearchplus1.svg"
            />
            <img className={styles.groupIcon4} alt="" src="../group-281.svg" />
            <img
              className={styles.image1168Icon6}
              alt=""
              src="../image-11686@2x.png"
            />
          </div>
          <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
          <img
            className={styles.image1166Icon}
            alt=""
            src="../image-1166@2x.png"
          />
          <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
          <img
            className={styles.image23Icon1}
            alt=""
            src="../image-231@2x.png"
          />
          <img
            className={styles.image32Icon5}
            alt=""
            src="../image-325@2x.png"
          />
          <img className={styles.image3Icon3} alt="" src="../image-34@2x.png" />
        </div>
      </div>
      <div
        className={styles.component9Div}
        onClick={onComponent9ContainerClick}
      >
        <GroupComponent />
      </div>
      <div className={styles.component10Div}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.comfortHandyCraft}>Mukase Hostel - Single</div>
          <div className={styles.div17}>UGX 600,000</div>
          <div className={styles.div18}>$65.00</div>
          <img className={styles.lineIcon} alt="" src="../line-2.svg" />
          <div className={styles.frameDiv4}>
            <div className={styles.groupDiv62}>
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../vector-1.svg"
              />
              <div className={styles.saleDiv}>Sale</div>
            </div>
            <img
              className={styles.uilheartAltIcon1}
              alt=""
              src="../uilheartalt3.svg"
            />
            <img
              className={styles.uilsearchPlusIcon1}
              alt=""
              src="../uilsearchplus1.svg"
            />
            <img className={styles.groupIcon4} alt="" src="../group-283.svg" />
            <img
              className={styles.image1168Icon6}
              alt=""
              src="../image-11686@2x.png"
            />
          </div>
          <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
          <img
            className={styles.image1166Icon}
            alt=""
            src="../image-1166@2x.png"
          />
          <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
          <img
            className={styles.image23Icon1}
            alt=""
            src="../image-231@2x.png"
          />
          <img
            className={styles.image32Icon5}
            alt=""
            src="../image-325@2x.png"
          />
          <img className={styles.image3Icon3} alt="" src="../image-34@2x.png" />
        </div>
      </div>
      <div className={styles.component11Div}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.comfortHandyCraft}>
            Maryland Hostel - Triple
          </div>
          <div className={styles.div17}>UGX 250,000</div>
          <div className={styles.div18}>$65.00</div>
          <img className={styles.lineIcon} alt="" src="../line-2.svg" />
          <div className={styles.frameDiv5}>
            <div className={styles.groupDiv62}>
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../vector-1.svg"
              />
              <div className={styles.saleDiv}>Sale</div>
            </div>
            <img
              className={styles.uilheartAltIcon1}
              alt=""
              src="../uilheartalt3.svg"
            />
            <img
              className={styles.uilsearchPlusIcon1}
              alt=""
              src="../uilsearchplus1.svg"
            />
            <img className={styles.groupIcon4} alt="" src="../group-284.svg" />
            <img
              className={styles.image1168Icon6}
              alt=""
              src="../image-11686@2x.png"
            />
          </div>
          <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
          <img
            className={styles.image1166Icon}
            alt=""
            src="../image-1166@2x.png"
          />
          <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
          <img
            className={styles.image23Icon1}
            alt=""
            src="../image-231@2x.png"
          />
          <img
            className={styles.image32Icon5}
            alt=""
            src="../image-325@2x.png"
          />
          <img className={styles.image3Icon3} alt="" src="../image-34@2x.png" />
        </div>
      </div>
      <div className={styles.component12Div}>
        <div className={styles.groupDiv67}>
          <div className={styles.comfortHandyCraft}>
            California Girls Hostel - Single
          </div>
          <div className={styles.div23}>UGX 570,000</div>
          <div className={styles.div24}>$65.00</div>
          <img className={styles.lineIcon3} alt="" src="../line-2.svg" />
          <div className={styles.frameDiv6}>
            <div className={styles.groupDiv62}>
              <img
                className={styles.vectorIcon6}
                alt=""
                src="../vector-1.svg"
              />
              <div className={styles.saleDiv}>Sale</div>
            </div>
            <img
              className={styles.uilheartAltIcon1}
              alt=""
              src="../uilheartalt3.svg"
            />
            <img
              className={styles.uilsearchPlusIcon1}
              alt=""
              src="../uilsearchplus1.svg"
            />
            <img className={styles.groupIcon4} alt="" src="../group-285.svg" />
            <img
              className={styles.image1168Icon6}
              alt=""
              src="../image-11686@2x.png"
            />
          </div>
          <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
          <img
            className={styles.image1166Icon}
            alt=""
            src="../image-1166@2x.png"
          />
          <img className={styles.image9Icon3} alt="" src="../image-9@2x.png" />
          <img
            className={styles.image23Icon1}
            alt=""
            src="../image-231@2x.png"
          />
          <img
            className={styles.image32Icon5}
            alt=""
            src="../image-325@2x.png"
          />
          <img className={styles.image3Icon6} alt="" src="../image-38@2x.png" />
        </div>
      </div>
      <div className={styles.leatestProductDiv}>
        <div className={styles.comfortHandyCraft}>Africa Hostel - Double</div>
        <div className={styles.div17}>UGX 250,000</div>
        <div className={styles.div26} />
        <img className={styles.lineIcon4} alt="" src="../line-25.svg" />
        <div className={styles.frameDiv7}>
          <div className={styles.image15Div} />
          <div className={styles.groupDiv69}>
            <img className={styles.groupDiv62} alt="" src="../vector-1.svg" />
            <div className={styles.saleDiv4}>Discount</div>
          </div>
          <img
            className={styles.uilheartAltIcon5}
            alt=""
            src="../uilheartalt6.svg"
          />
          <img
            className={styles.uilsearchPlusIcon5}
            alt=""
            src="../uilsearchplus6.svg"
          />
          <img className={styles.groupIcon8} alt="" src="../group-286.svg" />
        </div>
      </div>
      <div className={styles.trndingProductsList}>
        <div className={styles.topCatagoriesTopCatagories}>
          <div className={styles.rectangleDiv48} />
          <div className={styles.groupDiv71}>
            <div className={styles.executiveSeatChair}>Executive Hostels 1</div>
            <div className={styles.div27}>$32.00</div>
          </div>
        </div>
        <img className={styles.image30Icon} alt="" src="../image-30@2x.png" />
        <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
        <img className={styles.image33Icon} alt="" src="../image-331@2x.png" />
        <img className={styles.image28Icon} alt="" src="../image-28@2x.png" />
      </div>
      <div className={styles.trndingProductsList1}>
        <div className={styles.groupDiv72}>
          <div className={styles.rectangleDiv49} />
          <div className={styles.groupDiv73}>
            <div className={styles.executiveSeatChair}>Executive Hostels 2</div>
            <div className={styles.div28}>$32.00</div>
          </div>
        </div>
        <img className={styles.image30Icon1} alt="" src="../image-30@2x.png" />
        <img className={styles.image19Icon1} alt="" src="../image-19@2x.png" />
        <img className={styles.image33Icon} alt="" src="../image-331@2x.png" />
        <img className={styles.image28Icon} alt="" src="../image-28@2x.png" />
      </div>
      <div className={styles.trndingProductsList2}>
        <div className={styles.groupDiv72}>
          <div className={styles.rectangleDiv49} />
          <div className={styles.groupDiv73}>
            <div className={styles.executiveSeatChair}>Executive Hostels 3</div>
            <div className={styles.div28}>$32.00</div>
          </div>
        </div>
        <img className={styles.image30Icon1} alt="" src="../image-30@2x.png" />
        <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
        <img className={styles.image33Icon} alt="" src="../image-331@2x.png" />
        <img className={styles.image28Icon2} alt="" src="../image-28@2x.png" />
      </div>
      <img className={styles.groupIcon9} alt="" src="../group-266.svg" />
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
      <div className={styles.uSD500Div}>USD 500</div>
      <div className={styles.uSD1000Div}>USD 1000</div>
      <div className={styles.uSD1700Div}>USD 1700</div>
    </div>
  );
};

export default HomePage;
