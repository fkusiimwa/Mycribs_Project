import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NOTFOUND.module.css";

const NOTFOUND = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText2Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  return (
    <div className={styles.nOTFOUNDDiv}>
      <div className={styles.groupDiv} onClick={onGroupContainer5Click}>
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
            <div className={styles.notFoundDiv}>404 Not Found</div>
            <b className={styles.notFoundB}>404 Not Found</b>
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
            <img className={styles.groupIcon} alt="" src="../group-1712.svg" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv1}>Hostels</div>
            <div className={styles.productsDiv} onClick={onProductsTextClick}>
              About Us
            </div>
            <div className={styles.blogDiv}>{`Blog `}</div>
            <div className={styles.shopDiv} onClick={onShopTextClick}>
              Cpntact
            </div>
            <div className={styles.contactDiv}>Contact</div>
            <div className={styles.groupDiv3}>
              <div className={styles.rectangleDiv1} />
              <div className={styles.groupDiv4}>
                <div className={styles.rectangleDiv2} />
              </div>
            </div>
            <b className={styles.hektoB}>Mycribs</b>
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
              src="../uilsearch12.svg"
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
          <div className={styles.g1152Div}>
            <div className={styles.rectangleDiv6} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-20523.svg" />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.g1152Div}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon2} alt="" src="../group-20523.svg" />
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.groupDiv11}>
          <b className={styles.b}>404</b>
          <b className={styles.thePageYouRequestedWasNot}>
            {" "}
            The page you requested was not found!
          </b>
          <img className={styles.path14Icon} alt="" />
          <img className={styles.path34Icon} alt="" src="../path34.svg" />
          <img className={styles.path36Icon} alt="" src="../path36.svg" />
          <img className={styles.path38Icon} alt="" src="../path38.svg" />
          <img className={styles.path40Icon} alt="" src="../path40.svg" />
          <img className={styles.path42Icon} alt="" src="../path42.svg" />
          <img className={styles.path44Icon} alt="" src="../path44.svg" />
          <img className={styles.path46Icon} alt="" src="../path46.svg" />
          <img className={styles.path48Icon} alt="" src="../path48.svg" />
          <img className={styles.path50Icon} alt="" src="../path50.svg" />
          <img className={styles.path52Icon} alt="" src="../path52.svg" />
          <img className={styles.path54Icon} alt="" />
          <img className={styles.path56Icon} alt="" />
          <img className={styles.path58Icon} alt="" />
          <img className={styles.path60Icon} alt="" />
          <img className={styles.path62Icon} alt="" />
          <img className={styles.path64Icon} alt="" />
          <img className={styles.path66Icon} alt="" />
          <img className={styles.path68Icon} alt="" />
          <img className={styles.path70Icon} alt="" src="../path70.svg" />
          <img className={styles.path72Icon} alt="" src="../path72.svg" />
          <img className={styles.path74Icon} alt="" src="../path74.svg" />
          <img className={styles.path76Icon} alt="" src="../path76.svg" />
          <img className={styles.path78Icon} alt="" src="../path78.svg" />
          <img className={styles.path80Icon} alt="" src="../path80.svg" />
          <img className={styles.path82Icon} alt="" src="../path82.svg" />
          <img className={styles.path84Icon} alt="" src="../path84.svg" />
          <img className={styles.path86Icon} alt="" src="../path86.svg" />
          <img className={styles.path88Icon} alt="" src="../path88.svg" />
          <img className={styles.path90Icon} alt="" src="../path90.svg" />
          <img className={styles.path92Icon} alt="" src="../path92.svg" />
          <img className={styles.path94Icon} alt="" src="../path94.svg" />
          <img className={styles.path96Icon} alt="" src="../path96.svg" />
          <img className={styles.path98Icon} alt="" src="../path98.svg" />
          <img className={styles.path100Icon} alt="" src="../path100.svg" />
          <img className={styles.path102Icon} alt="" src="../path102.svg" />
          <img className={styles.path104Icon} alt="" src="../path104.svg" />
          <img className={styles.path106Icon} alt="" src="../path106.svg" />
          <img className={styles.path108Icon} alt="" src="../path108.svg" />
          <img className={styles.path110Icon} alt="" src="../path110.svg" />
          <img className={styles.path112Icon} alt="" src="../path112.svg" />
          <img className={styles.path114Icon} alt="" src="../path114.svg" />
          <img className={styles.path116Icon} alt="" src="../path116.svg" />
          <img className={styles.path118Icon} alt="" src="../path118.svg" />
          <img className={styles.path120Icon} alt="" src="../path120.svg" />
          <img className={styles.path122Icon} alt="" src="../path122.svg" />
          <img className={styles.path124Icon} alt="" src="../path124.svg" />
          <img className={styles.path126Icon} alt="" src="../path126.svg" />
          <img className={styles.path128Icon} alt="" src="../path128.svg" />
          <img className={styles.path130Icon} alt="" src="../path130.svg" />
          <img className={styles.path132Icon} alt="" src="../path132.svg" />
          <img className={styles.path134Icon} alt="" src="../path134.svg" />
          <img className={styles.path136Icon} alt="" src="../path136.svg" />
          <img className={styles.path138Icon} alt="" src="../path138.svg" />
          <img className={styles.path140Icon} alt="" src="../path140.svg" />
          <img className={styles.path142Icon} alt="" src="../path142.svg" />
          <img className={styles.path144Icon} alt="" src="../path144.svg" />
          <img className={styles.path146Icon} alt="" src="../path146.svg" />
          <img className={styles.path148Icon} alt="" src="../path148.svg" />
          <img className={styles.path150Icon} alt="" src="../path150.svg" />
          <img className={styles.path150Icon} alt="" src="../path152.svg" />
          <img className={styles.path154Icon} alt="" src="../path154.svg" />
          <img className={styles.path156Icon} alt="" src="../path156.svg" />
          <img className={styles.path158Icon} alt="" src="../path158.svg" />
          <img className={styles.path160Icon} alt="" src="../path160.svg" />
          <img className={styles.path162Icon} alt="" src="../path162.svg" />
          <img className={styles.path162Icon} alt="" src="../path164.svg" />
          <img className={styles.path166Icon} alt="" src="../path166.svg" />
          <img className={styles.path168Icon} alt="" src="../path168.svg" />
          <img className={styles.path170Icon} alt="" src="../path170.svg" />
          <img className={styles.path172Icon} alt="" src="../path172.svg" />
          <img className={styles.path174Icon} alt="" src="../path174.svg" />
          <img className={styles.path174Icon} alt="" src="../path176.svg" />
          <img className={styles.path178Icon} alt="" src="../path178.svg" />
          <img className={styles.path178Icon} alt="" src="../path180.svg" />
          <img className={styles.path182Icon} alt="" src="../path182.svg" />
          <img className={styles.path182Icon} alt="" src="../path184.svg" />
          <img className={styles.path186Icon} alt="" src="../path186.svg" />
          <img className={styles.path188Icon} alt="" src="../path188.svg" />
          <img className={styles.path190Icon} alt="" src="../path190.svg" />
          <img className={styles.path192Icon} alt="" src="../path192.svg" />
          <img className={styles.path194Icon} alt="" src="../path194.svg" />
          <img className={styles.path196Icon} alt="" src="../path196.svg" />
          <img className={styles.path198Icon} alt="" src="../path198.svg" />
          <img className={styles.path200Icon} alt="" src="../path200.svg" />
          <img className={styles.path202Icon} alt="" src="../path202.svg" />
          <img className={styles.path204Icon} alt="" src="../path204.svg" />
          <img className={styles.path206Icon} alt="" src="../path206.svg" />
          <img className={styles.path210Icon} alt="" src="../path210.svg" />
          <img className={styles.path212Icon} alt="" src="../path212.svg" />
          <img className={styles.path214Icon} alt="" src="../path214.svg" />
          <img className={styles.path216Icon} alt="" src="../path216.svg" />
          <img className={styles.path218Icon} alt="" src="../path218.svg" />
          <img className={styles.path220Icon} alt="" src="../path220.svg" />
          <img className={styles.path222Icon} alt="" src="../path222.svg" />
          <img className={styles.path208Icon} alt="" src="../path208.svg" />
          <img className={styles.path224Icon} alt="" src="../path224.svg" />
          <img className={styles.path226Icon} alt="" src="../path226.svg" />
          <img className={styles.path228Icon} alt="" src="../path228.svg" />
          <img className={styles.path230Icon} alt="" src="../path230.svg" />
          <img className={styles.path232Icon} alt="" src="../path232.svg" />
          <img className={styles.path234Icon} alt="" src="../path234.svg" />
          <img className={styles.path236Icon} alt="" src="../path236.svg" />
          <img className={styles.path238Icon} alt="" src="../path238.svg" />
          <img className={styles.path240Icon} alt="" />
          <img className={styles.path242Icon} alt="" />
          <img className={styles.path244Icon} alt="" />
          <img className={styles.path246Icon} alt="" src="../path246.svg" />
          <img className={styles.path248Icon} alt="" src="../path248.svg" />
          <img className={styles.path250Icon} alt="" src="../path250.svg" />
          <img className={styles.path252Icon} alt="" src="../path252.svg" />
          <img className={styles.path254Icon} alt="" src="../path254.svg" />
          <img className={styles.path256Icon} alt="" src="../path256.svg" />
          <img className={styles.path258Icon} alt="" src="../path258.svg" />
          <img className={styles.path260Icon} alt="" src="../path260.svg" />
          <img className={styles.path262Icon} alt="" src="../path262.svg" />
          <img className={styles.path264Icon} alt="" src="../path264.svg" />
          <img className={styles.path266Icon} alt="" src="../path266.svg" />
          <img className={styles.path268Icon} alt="" src="../path268.svg" />
          <img className={styles.path270Icon} alt="" src="../path270.svg" />
          <img className={styles.path272Icon} alt="" src="../path272.svg" />
          <img className={styles.path274Icon} alt="" src="../path274.svg" />
          <img className={styles.path276Icon} alt="" src="../path276.svg" />
          <img className={styles.path278Icon} alt="" src="../path278.svg" />
          <img className={styles.path280Icon} alt="" src="../path280.svg" />
          <img className={styles.path282Icon} alt="" src="../path282.svg" />
          <img className={styles.path284Icon} alt="" src="../path284.svg" />
          <img className={styles.path286Icon} alt="" src="../path286.svg" />
          <img className={styles.path288Icon} alt="" src="../path288.svg" />
          <img className={styles.path290Icon} alt="" src="../path290.svg" />
          <img className={styles.path292Icon} alt="" src="../path292.svg" />
          <img className={styles.path294Icon} alt="" src="../path294.svg" />
          <img className={styles.path296Icon} alt="" src="../path296.svg" />
          <img className={styles.path298Icon} alt="" src="../path298.svg" />
          <img className={styles.path300Icon} alt="" src="../path300.svg" />
          <img className={styles.path302Icon} alt="" src="../path302.svg" />
          <img className={styles.path304Icon} alt="" src="../path304.svg" />
          <img className={styles.path306Icon} alt="" src="../path306.svg" />
          <img className={styles.path308Icon} alt="" src="../path308.svg" />
          <img className={styles.path310Icon} alt="" src="../path310.svg" />
          <img className={styles.path312Icon} alt="" src="../path312.svg" />
          <img className={styles.path314Icon} alt="" src="../path314.svg" />
          <img className={styles.path316Icon} alt="" src="../path316.svg" />
          <img className={styles.path318Icon} alt="" src="../path318.svg" />
          <img className={styles.path320Icon} alt="" src="../path320.svg" />
          <img className={styles.path322Icon} alt="" src="../path322.svg" />
          <img className={styles.path324Icon} alt="" src="../path324.svg" />
          <img className={styles.path326Icon} alt="" src="../path326.svg" />
          <img className={styles.path328Icon} alt="" src="../path328.svg" />
          <img className={styles.path330Icon} alt="" src="../path330.svg" />
          <img className={styles.path332Icon} alt="" src="../path332.svg" />
          <img className={styles.path334Icon} alt="" src="../path334.svg" />
          <img className={styles.path336Icon} alt="" src="../path336.svg" />
          <img className={styles.path338Icon} alt="" src="../path338.svg" />
          <img className={styles.path340Icon} alt="" src="../path340.svg" />
          <img className={styles.path342Icon} alt="" src="../path342.svg" />
          <img className={styles.path344Icon} alt="" src="../path344.svg" />
          <img className={styles.path346Icon} alt="" src="../path346.svg" />
          <img className={styles.path348Icon} alt="" src="../path348.svg" />
          <img className={styles.path350Icon} alt="" src="../path350.svg" />
          <img className={styles.path352Icon} alt="" src="../path352.svg" />
          <img className={styles.path354Icon} alt="" src="../path354.svg" />
          <img className={styles.path356Icon} alt="" src="../path356.svg" />
          <img className={styles.path358Icon} alt="" src="../path358.svg" />
          <img className={styles.path360Icon} alt="" src="../path360.svg" />
          <img className={styles.path362Icon} alt="" src="../path362.svg" />
          <img className={styles.path364Icon} alt="" src="../path364.svg" />
          <img className={styles.path366Icon} alt="" src="../path366.svg" />
          <img className={styles.path368Icon} alt="" src="../path368.svg" />
          <img className={styles.path370Icon} alt="" src="../path370.svg" />
          <img className={styles.path372Icon} alt="" src="../path372.svg" />
          <img className={styles.path374Icon} alt="" src="../path374.svg" />
          <img className={styles.path376Icon} alt="" src="../path376.svg" />
          <img className={styles.path378Icon} alt="" src="../path378.svg" />
          <img className={styles.path380Icon} alt="" src="../path380.svg" />
          <img className={styles.path382Icon} alt="" src="../path382.svg" />
          <img className={styles.path384Icon} alt="" src="../path384.svg" />
          <img className={styles.path386Icon} alt="" src="../path386.svg" />
          <img className={styles.path388Icon} alt="" src="../path388.svg" />
          <img className={styles.path390Icon} alt="" src="../path390.svg" />
          <img className={styles.path392Icon} alt="" src="../path392.svg" />
          <img className={styles.path394Icon} alt="" src="../path394.svg" />
          <img className={styles.path396Icon} alt="" src="../path396.svg" />
          <img className={styles.path398Icon} alt="" src="../path398.svg" />
          <img className={styles.path400Icon} alt="" src="../path400.svg" />
          <img className={styles.path402Icon} alt="" src="../path402.svg" />
          <img className={styles.path404Icon} alt="" src="../path404.svg" />
          <img className={styles.path406Icon} alt="" src="../path406.svg" />
          <img className={styles.path408Icon} alt="" src="../path408.svg" />
          <img className={styles.path410Icon} alt="" src="../path410.svg" />
          <img className={styles.path412Icon} alt="" src="../path412.svg" />
          <img className={styles.path414Icon} alt="" src="../path414.svg" />
          <img className={styles.path416Icon} alt="" src="../path416.svg" />
          <img className={styles.path418Icon} alt="" src="../path418.svg" />
          <img className={styles.path420Icon} alt="" src="../path420.svg" />
          <img className={styles.path422Icon} alt="" src="../path422.svg" />
          <img className={styles.path424Icon} alt="" src="../path424.svg" />
          <img className={styles.path426Icon} alt="" src="../path426.svg" />
          <img className={styles.path428Icon} alt="" src="../path428.svg" />
          <img className={styles.path430Icon} alt="" src="../path430.svg" />
          <img className={styles.path432Icon} alt="" src="../path432.svg" />
          <img className={styles.path434Icon} alt="" src="../path434.svg" />
          <img className={styles.path436Icon} alt="" src="../path436.svg" />
          <img className={styles.path438Icon} alt="" src="../path438.svg" />
          <img className={styles.path440Icon} alt="" src="../path440.svg" />
          <img className={styles.path442Icon} alt="" src="../path442.svg" />
          <img className={styles.path444Icon} alt="" src="../path444.svg" />
          <img className={styles.path446Icon} alt="" src="../path446.svg" />
          <img className={styles.path448Icon} alt="" src="../path448.svg" />
          <img className={styles.path450Icon} alt="" src="../path450.svg" />
          <img className={styles.path452Icon} alt="" src="../path452.svg" />
          <img className={styles.path454Icon} alt="" src="../path454.svg" />
          <img className={styles.path456Icon} alt="" src="../path456.svg" />
          <img className={styles.path458Icon} alt="" src="../path458.svg" />
          <img className={styles.path460Icon} alt="" src="../path460.svg" />
          <img className={styles.path462Icon} alt="" src="../path462.svg" />
          <img className={styles.path464Icon} alt="" src="../path464.svg" />
          <img className={styles.path466Icon} alt="" src="../path466.svg" />
          <img className={styles.path468Icon} alt="" src="../path468.svg" />
          <img className={styles.path470Icon} alt="" src="../path470.svg" />
          <img className={styles.path472Icon} alt="" src="../path472.svg" />
          <img className={styles.path474Icon} alt="" src="../path474.svg" />
          <img className={styles.path476Icon} alt="" src="../path476.svg" />
          <img className={styles.path478Icon} alt="" src="../path478.svg" />
          <img className={styles.path480Icon} alt="" />
          <img className={styles.path482Icon} alt="" src="../path482.svg" />
          <img className={styles.path484Icon} alt="" src="../path484.svg" />
          <img className={styles.path486Icon} alt="" src="../path486.svg" />
          <img className={styles.path488Icon} alt="" src="../path488.svg" />
          <img className={styles.path490Icon} alt="" src="../path490.svg" />
          <img className={styles.path492Icon} alt="" src="../path492.svg" />
          <img className={styles.path494Icon} alt="" src="../path494.svg" />
          <img className={styles.path496Icon} alt="" src="../path496.svg" />
          <img className={styles.path498Icon} alt="" src="../path498.svg" />
          <img className={styles.path500Icon} alt="" src="../path500.svg" />
          <img className={styles.path502Icon} alt="" src="../path502.svg" />
          <img className={styles.path504Icon} alt="" src="../path504.svg" />
          <img className={styles.path506Icon} alt="" src="../path506.svg" />
          <img className={styles.path504Icon} alt="" src="../path508.svg" />
          <img className={styles.path510Icon} alt="" />
          <img className={styles.path512Icon} alt="" />
          <img className={styles.path514Icon} alt="" src="../path514.svg" />
          <img className={styles.path516Icon} alt="" />
          <img className={styles.path518Icon} alt="" />
          <img className={styles.path520Icon} alt="" />
          <img className={styles.path522Icon} alt="" />
          <img className={styles.path524Icon} alt="" />
          <img className={styles.path526Icon} alt="" />
          <img className={styles.path528Icon} alt="" />
          <img className={styles.path530Icon} alt="" />
          <img className={styles.path532Icon} alt="" />
          <img className={styles.path534Icon} alt="" src="../path534.svg" />
          <img className={styles.path536Icon} alt="" src="../path536.svg" />
          <img className={styles.path538Icon} alt="" />
          <img className={styles.path540Icon} alt="" src="../path540.svg" />
          <img className={styles.path542Icon} alt="" />
          <img className={styles.path516Icon} alt="" />
          <img className={styles.path518Icon} alt="" />
          <img className={styles.path548Icon} alt="" />
          <img className={styles.path550Icon} alt="" />
          <img className={styles.path552Icon} alt="" src="../path552.svg" />
          <img className={styles.path554Icon} alt="" />
          <img className={styles.path556Icon} alt="" src="../path556.svg" />
          <img className={styles.path558Icon} alt="" src="../path558.svg" />
          <img className={styles.path560Icon} alt="" src="../path560.svg" />
          <img className={styles.path562Icon} alt="" src="../path562.svg" />
          <img className={styles.path564Icon} alt="" src="../path564.svg" />
          <img className={styles.path566Icon} alt="" src="../path566.svg" />
          <img className={styles.path568Icon} alt="" src="../path568.svg" />
          <img className={styles.path570Icon} alt="" src="../path570.svg" />
          <img className={styles.path572Icon} alt="" src="../path572.svg" />
          <img className={styles.path574Icon} alt="" src="../path574.svg" />
          <img className={styles.path576Icon} alt="" src="../path576.svg" />
          <img className={styles.path578Icon} alt="" src="../path578.svg" />
          <img className={styles.path580Icon} alt="" src="../path580.svg" />
          <img className={styles.path582Icon} alt="" src="../path582.svg" />
          <img className={styles.path584Icon} alt="" src="../path584.svg" />
          <img className={styles.path586Icon} alt="" src="../path586.svg" />
          <img className={styles.path588Icon} alt="" src="../path588.svg" />
          <img className={styles.path590Icon} alt="" src="../path590.svg" />
          <img className={styles.path592Icon} alt="" src="../path592.svg" />
          <img className={styles.path594Icon} alt="" src="../path594.svg" />
          <img className={styles.path596Icon} alt="" src="../path596.svg" />
          <img className={styles.path598Icon} alt="" src="../path598.svg" />
          <img className={styles.path600Icon} alt="" src="../path600.svg" />
          <img className={styles.path602Icon} alt="" src="../path602.svg" />
          <img className={styles.path604Icon} alt="" src="../path604.svg" />
          <img className={styles.path606Icon} alt="" src="../path606.svg" />
          <img className={styles.path608Icon} alt="" src="../path608.svg" />
          <img className={styles.path610Icon} alt="" src="../path610.svg" />
          <img className={styles.path612Icon} alt="" />
          <img className={styles.path614Icon} alt="" src="../path614.svg" />
          <img className={styles.path574Icon} alt="" src="../path616.svg" />
          <img className={styles.path576Icon} alt="" src="../path618.svg" />
          <img className={styles.path578Icon} alt="" src="../path620.svg" />
          <img className={styles.path580Icon} alt="" src="../path622.svg" />
          <img className={styles.path624Icon} alt="" src="../path624.svg" />
          <img className={styles.path626Icon} alt="" src="../path626.svg" />
          <img className={styles.path594Icon} alt="" src="../path628.svg" />
          <img className={styles.path596Icon} alt="" src="../path630.svg" />
          <img className={styles.path598Icon} alt="" src="../path632.svg" />
          <img className={styles.path600Icon} alt="" src="../path634.svg" />
          <img className={styles.path602Icon} alt="" src="../path636.svg" />
          <img className={styles.path638Icon} alt="" src="../path638.svg" />
          <img className={styles.path606Icon} alt="" src="../path640.svg" />
          <img className={styles.path608Icon} alt="" src="../path642.svg" />
          <img className={styles.path644Icon} alt="" src="../path644.svg" />
          <img className={styles.path646Icon} alt="" src="../path646.svg" />
          <img className={styles.path648Icon} alt="" src="../path648.svg" />
          <img className={styles.path650Icon} alt="" src="../path650.svg" />
          <img className={styles.path652Icon} alt="" src="../path652.svg" />
          <img className={styles.path654Icon} alt="" src="../path654.svg" />
          <img className={styles.path656Icon} alt="" src="../path656.svg" />
          <img className={styles.path658Icon} alt="" src="../path658.svg" />
          <img className={styles.path660Icon} alt="" src="../path660.svg" />
          <img className={styles.path662Icon} alt="" src="../path662.svg" />
          <img className={styles.path664Icon} alt="" src="../path664.svg" />
          <img className={styles.path666Icon} alt="" src="../path666.svg" />
          <img className={styles.path668Icon} alt="" src="../path668.svg" />
          <img className={styles.path670Icon} alt="" src="../path670.svg" />
          <img className={styles.path672Icon} alt="" src="../path672.svg" />
          <img className={styles.path674Icon} alt="" src="../path674.svg" />
          <img className={styles.path676Icon} alt="" src="../path676.svg" />
          <img className={styles.path678Icon} alt="" src="../path678.svg" />
          <img className={styles.path680Icon} alt="" src="../path680.svg" />
          <img className={styles.path682Icon} alt="" src="../path682.svg" />
          <img className={styles.path684Icon} alt="" src="../path684.svg" />
          <img className={styles.path686Icon} alt="" src="../path686.svg" />
          <img className={styles.path688Icon} alt="" src="../path688.svg" />
          <img className={styles.path690Icon} alt="" src="../path690.svg" />
          <img className={styles.path692Icon} alt="" src="../path692.svg" />
          <img className={styles.path692Icon} alt="" src="../path694.svg" />
          <img className={styles.path696Icon} alt="" src="../path696.svg" />
          <img className={styles.path696Icon} alt="" src="../path698.svg" />
          <img className={styles.path700Icon} alt="" src="../path700.svg" />
          <img className={styles.path700Icon} alt="" src="../path702.svg" />
          <img className={styles.path704Icon} alt="" src="../path704.svg" />
          <img className={styles.path704Icon} alt="" src="../path706.svg" />
          <img className={styles.path708Icon} alt="" src="../path708.svg" />
          <img className={styles.path708Icon} alt="" src="../path710.svg" />
          <img className={styles.path712Icon} alt="" src="../path712.svg" />
          <img className={styles.path712Icon} alt="" src="../path714.svg" />
          <img className={styles.path716Icon} alt="" src="../path716.svg" />
          <img className={styles.path716Icon} alt="" src="../path718.svg" />
          <img className={styles.path720Icon} alt="" src="../path720.svg" />
          <img className={styles.path720Icon} alt="" src="../path722.svg" />
          <img className={styles.path724Icon} alt="" src="../path724.svg" />
          <img className={styles.path724Icon} alt="" src="../path726.svg" />
          <img className={styles.path728Icon} alt="" src="../path728.svg" />
          <img className={styles.path728Icon} alt="" src="../path730.svg" />
          <img className={styles.path732Icon} alt="" src="../path732.svg" />
          <img className={styles.path734Icon} alt="" src="../path734.svg" />
          <img className={styles.path736Icon} alt="" src="../path736.svg" />
          <img className={styles.path738Icon} alt="" src="../path738.svg" />
          <img className={styles.path740Icon} alt="" src="../path740.svg" />
          <img className={styles.path742Icon} alt="" src="../path742.svg" />
          <img className={styles.path744Icon} alt="" src="../path744.svg" />
          <img className={styles.path746Icon} alt="" src="../path746.svg" />
          <img className={styles.path748Icon} alt="" src="../path748.svg" />
          <img className={styles.path750Icon} alt="" src="../path750.svg" />
          <img className={styles.path752Icon} alt="" src="../path752.svg" />
          <img className={styles.path754Icon} alt="" src="../path754.svg" />
          <img className={styles.path756Icon} alt="" src="../path756.svg" />
          <img className={styles.path758Icon} alt="" src="../path758.svg" />
          <img className={styles.path760Icon} alt="" src="../path760.svg" />
          <img className={styles.path762Icon} alt="" src="../path762.svg" />
          <img className={styles.path764Icon} alt="" src="../path764.svg" />
          <img className={styles.path766Icon} alt="" src="../path766.svg" />
          <img className={styles.path766Icon} alt="" src="../path768.svg" />
          <img className={styles.path770Icon} alt="" src="../path770.svg" />
          <img className={styles.path770Icon} alt="" src="../path772.svg" />
          <img className={styles.path774Icon} alt="" src="../path774.svg" />
          <img className={styles.path774Icon} alt="" src="../path776.svg" />
          <img className={styles.path778Icon} alt="" src="../path778.svg" />
          <img className={styles.path778Icon} alt="" src="../path780.svg" />
          <img className={styles.path782Icon} alt="" src="../path782.svg" />
          <img className={styles.path782Icon} alt="" src="../path784.svg" />
          <img className={styles.path786Icon} alt="" src="../path786.svg" />
          <img className={styles.path786Icon} alt="" src="../path788.svg" />
          <img className={styles.path790Icon} alt="" src="../path790.svg" />
          <img className={styles.path790Icon} alt="" src="../path792.svg" />
          <img className={styles.path794Icon} alt="" src="../path794.svg" />
          <img className={styles.path794Icon} alt="" src="../path796.svg" />
          <img className={styles.path798Icon} alt="" src="../path798.svg" />
          <img className={styles.path798Icon} alt="" src="../path800.svg" />
          <img className={styles.path802Icon} alt="" src="../path802.svg" />
          <img className={styles.path804Icon} alt="" src="../path804.svg" />
          <img className={styles.path804Icon} alt="" src="../path806.svg" />
          <img className={styles.path808Icon} alt="" src="../path808.svg" />
          <img className={styles.path810Icon} alt="" src="../path810.svg" />
          <img className={styles.path812Icon} alt="" src="../path812.svg" />
          <img className={styles.path814Icon} alt="" src="../path814.svg" />
          <img className={styles.path816Icon} alt="" src="../path816.svg" />
          <img className={styles.path818Icon} alt="" src="../path818.svg" />
          <img className={styles.path820Icon} alt="" src="../path820.svg" />
          <img className={styles.path822Icon} alt="" src="../path822.svg" />
          <img className={styles.path824Icon} alt="" src="../path824.svg" />
          <img className={styles.path826Icon} alt="" src="../path826.svg" />
          <img className={styles.path828Icon} alt="" src="../path828.svg" />
          <img className={styles.path830Icon} alt="" src="../path830.svg" />
          <img className={styles.path832Icon} alt="" src="../path832.svg" />
          <img className={styles.path834Icon} alt="" src="../path834.svg" />
          <img className={styles.path836Icon} alt="" src="../path836.svg" />
          <img className={styles.path838Icon} alt="" src="../path838.svg" />
          <img className={styles.path840Icon} alt="" src="../path840.svg" />
          <img className={styles.path842Icon} alt="" src="../path842.svg" />
          <img className={styles.path844Icon} alt="" src="../path844.svg" />
          <img className={styles.path846Icon} alt="" src="../path846.svg" />
          <img className={styles.path848Icon} alt="" src="../path848.svg" />
          <img className={styles.path850Icon} alt="" src="../path850.svg" />
          <img className={styles.path852Icon} alt="" src="../path852.svg" />
          <img className={styles.path854Icon} alt="" src="../path854.svg" />
          <img className={styles.path856Icon} alt="" src="../path856.svg" />
          <img className={styles.path858Icon} alt="" src="../path858.svg" />
          <img className={styles.path860Icon} alt="" src="../path860.svg" />
          <img className={styles.path862Icon} alt="" src="../path862.svg" />
          <img className={styles.path864Icon} alt="" src="../path864.svg" />
          <img className={styles.path866Icon} alt="" src="../path866.svg" />
          <img className={styles.path868Icon} alt="" src="../path868.svg" />
          <img className={styles.path870Icon} alt="" src="../path870.svg" />
          <img className={styles.path872Icon} alt="" src="../path872.svg" />
          <img className={styles.path874Icon} alt="" src="../path874.svg" />
          <img className={styles.path876Icon} alt="" src="../path876.svg" />
          <img className={styles.path878Icon} alt="" />
          <img className={styles.path880Icon} alt="" />
          <img className={styles.path882Icon} alt="" />
          <img className={styles.path884Icon} alt="" src="../path884.svg" />
          <img className={styles.path886Icon} alt="" src="../path886.svg" />
          <img className={styles.path888Icon} alt="" src="../path888.svg" />
          <img className={styles.path890Icon} alt="" src="../path890.svg" />
          <img className={styles.path892Icon} alt="" src="../path892.svg" />
          <img className={styles.path896Icon} alt="" src="../path896.svg" />
          <img className={styles.path898Icon} alt="" src="../path898.svg" />
          <img className={styles.path900Icon} alt="" src="../path900.svg" />
          <img className={styles.path902Icon} alt="" src="../path902.svg" />
          <img className={styles.path904Icon} alt="" src="../path904.svg" />
          <img className={styles.path906Icon} alt="" src="../path906.svg" />
          <img className={styles.path908Icon} alt="" src="../path908.svg" />
          <img className={styles.path910Icon} alt="" src="../path910.svg" />
          <img className={styles.path912Icon} alt="" src="../path912.svg" />
          <img className={styles.path914Icon} alt="" src="../path914.svg" />
          <img className={styles.path916Icon} alt="" src="../path916.svg" />
          <img className={styles.path918Icon} alt="" src="../path918.svg" />
          <img className={styles.path920Icon} alt="" src="../path920.svg" />
          <img className={styles.path922Icon} alt="" src="../path922.svg" />
          <img className={styles.path924Icon} alt="" src="../path924.svg" />
          <img className={styles.path926Icon} alt="" src="../path926.svg" />
          <img className={styles.path928Icon} alt="" src="../path928.svg" />
          <img className={styles.path930Icon} alt="" src="../path930.svg" />
          <img className={styles.path932Icon} alt="" src="../path932.svg" />
          <img className={styles.path934Icon} alt="" src="../path934.svg" />
          <img className={styles.path936Icon} alt="" src="../path936.svg" />
          <img className={styles.path938Icon} alt="" src="../path938.svg" />
          <img className={styles.path940Icon} alt="" src="../path940.svg" />
          <img className={styles.path942Icon} alt="" src="../path942.svg" />
          <img className={styles.path944Icon} alt="" src="../path944.svg" />
          <img className={styles.path946Icon} alt="" src="../path946.svg" />
          <img className={styles.path948Icon} alt="" src="../path948.svg" />
          <img className={styles.path950Icon} alt="" src="../path950.svg" />
          <img className={styles.path952Icon} alt="" src="../path952.svg" />
          <img className={styles.path954Icon} alt="" src="../path954.svg" />
          <img className={styles.path956Icon} alt="" src="../path956.svg" />
          <img className={styles.path958Icon} alt="" src="../path958.svg" />
          <img className={styles.path960Icon} alt="" src="../path960.svg" />
          <img className={styles.path962Icon} alt="" src="../path962.svg" />
          <img className={styles.path964Icon} alt="" src="../path964.svg" />
          <img className={styles.path966Icon} alt="" src="../path966.svg" />
          <img className={styles.path968Icon} alt="" src="../path968.svg" />
          <img className={styles.path970Icon} alt="" src="../path970.svg" />
          <img className={styles.path972Icon} alt="" src="../path972.svg" />
          <img className={styles.path974Icon} alt="" src="../path974.svg" />
          <img className={styles.path976Icon} alt="" src="../path976.svg" />
          <img className={styles.path978Icon} alt="" src="../path978.svg" />
          <img className={styles.path980Icon} alt="" src="../path980.svg" />
          <img className={styles.path982Icon} alt="" src="../path982.svg" />
          <img className={styles.path984Icon} alt="" src="../path984.svg" />
          <img className={styles.path986Icon} alt="" src="../path986.svg" />
          <img className={styles.path988Icon} alt="" src="../path988.svg" />
          <img className={styles.path990Icon} alt="" src="../path990.svg" />
          <img className={styles.path992Icon} alt="" src="../path992.svg" />
          <img className={styles.path994Icon} alt="" src="../path994.svg" />
          <img className={styles.path996Icon} alt="" src="../path996.svg" />
          <img className={styles.path998Icon} alt="" src="../path998.svg" />
          <img className={styles.path1000Icon} alt="" src="../path1000.svg" />
          <img className={styles.path1002Icon} alt="" src="../path1002.svg" />
          <img className={styles.path1004Icon} alt="" src="../path1004.svg" />
          <img className={styles.path1006Icon} alt="" src="../path1006.svg" />
          <img className={styles.path1008Icon} alt="" src="../path1008.svg" />
          <img className={styles.path1010Icon} alt="" src="../path1010.svg" />
          <img className={styles.path1012Icon} alt="" src="../path1012.svg" />
          <img className={styles.path1014Icon} alt="" src="../path1014.svg" />
          <img className={styles.path1016Icon} alt="" src="../path1016.svg" />
          <img className={styles.path1018Icon} alt="" src="../path1018.svg" />
          <img className={styles.path1020Icon} alt="" src="../path1020.svg" />
          <img className={styles.path1022Icon} alt="" src="../path1022.svg" />
          <img className={styles.path1024Icon} alt="" src="../path1024.svg" />
          <img className={styles.path1026Icon} alt="" src="../path1026.svg" />
          <img className={styles.path1028Icon} alt="" src="../path1028.svg" />
          <img className={styles.path1030Icon} alt="" src="../path1030.svg" />
          <img className={styles.path1032Icon} alt="" src="../path1032.svg" />
          <img className={styles.path1034Icon} alt="" src="../path1034.svg" />
          <img className={styles.path1036Icon} alt="" src="../path1036.svg" />
          <img className={styles.path1038Icon} alt="" src="../path1038.svg" />
          <img className={styles.path1040Icon} alt="" src="../path1040.svg" />
          <img className={styles.path1042Icon} alt="" src="../path1042.svg" />
          <img className={styles.path1044Icon} alt="" src="../path1044.svg" />
          <img className={styles.path1046Icon} alt="" src="../path1046.svg" />
          <img className={styles.path1048Icon} alt="" src="../path1048.svg" />
          <img className={styles.path1050Icon} alt="" src="../path1050.svg" />
          <img className={styles.path1052Icon} alt="" src="../path1052.svg" />
          <img className={styles.path1054Icon} alt="" src="../path1054.svg" />
          <img className={styles.path1056Icon} alt="" src="../path1056.svg" />
          <img className={styles.path1058Icon} alt="" src="../path1058.svg" />
          <img className={styles.path1060Icon} alt="" src="../path1060.svg" />
          <img className={styles.path1062Icon} alt="" src="../path1062.svg" />
          <img className={styles.path1064Icon} alt="" src="../path1064.svg" />
          <img className={styles.path1066Icon} alt="" src="../path1066.svg" />
          <img className={styles.path1068Icon} alt="" src="../path1068.svg" />
          <img className={styles.path1070Icon} alt="" src="../path1070.svg" />
          <img className={styles.path1072Icon} alt="" src="../path1072.svg" />
          <img className={styles.path1074Icon} alt="" src="../path1074.svg" />
          <img className={styles.path1076Icon} alt="" src="../path1076.svg" />
          <img className={styles.path1078Icon} alt="" src="../path1078.svg" />
          <img className={styles.path1080Icon} alt="" src="../path1080.svg" />
          <img className={styles.path1082Icon} alt="" src="../path1082.svg" />
          <img className={styles.path1084Icon} alt="" src="../path1084.svg" />
          <img className={styles.path1086Icon} alt="" src="../path1086.svg" />
          <img className={styles.path1088Icon} alt="" src="../path1088.svg" />
          <img className={styles.path1090Icon} alt="" src="../path1090.svg" />
          <img className={styles.path1092Icon} alt="" src="../path1092.svg" />
          <img className={styles.path1094Icon} alt="" src="../path1094.svg" />
          <img className={styles.path1096Icon} alt="" src="../path1096.svg" />
          <img className={styles.path1098Icon} alt="" src="../path1098.svg" />
          <img className={styles.path1100Icon} alt="" src="../path1100.svg" />
          <img className={styles.path1102Icon} alt="" src="../path1102.svg" />
          <img className={styles.path1104Icon} alt="" src="../path1104.svg" />
          <img className={styles.path1106Icon} alt="" src="../path1106.svg" />
          <img className={styles.path1108Icon} alt="" src="../path1108.svg" />
          <img className={styles.path1110Icon} alt="" src="../path1110.svg" />
          <img className={styles.path1112Icon} alt="" src="../path1112.svg" />
          <img className={styles.path1114Icon} alt="" src="../path1114.svg" />
          <img className={styles.path1116Icon} alt="" src="../path1116.svg" />
          <img className={styles.path1118Icon} alt="" src="../path1118.svg" />
          <img className={styles.path1120Icon} alt="" src="../path1120.svg" />
          <img className={styles.path1122Icon} alt="" src="../path1122.svg" />
          <img className={styles.path1124Icon} alt="" src="../path1124.svg" />
          <img className={styles.path1126Icon} alt="" src="../path1126.svg" />
          <img className={styles.path1128Icon} alt="" src="../path1128.svg" />
          <img className={styles.path1130Icon} alt="" src="../path1130.svg" />
          <img className={styles.path1132Icon} alt="" src="../path1132.svg" />
          <img className={styles.path1134Icon} alt="" src="../path1134.svg" />
          <img className={styles.path1136Icon} alt="" src="../path1136.svg" />
          <img className={styles.path1138Icon} alt="" src="../path1138.svg" />
          <img className={styles.path1140Icon} alt="" src="../path1140.svg" />
          <img className={styles.path1142Icon} alt="" src="../path1142.svg" />
          <img className={styles.path1144Icon} alt="" src="../path1144.svg" />
          <img className={styles.path1146Icon} alt="" src="../path1146.svg" />
          <img className={styles.path1148Icon} alt="" src="../path1148.svg" />
          <div className={styles.g1150Div}>
            <div className={styles.g1152Div}>
              <div className={styles.g1152Div}>
                <img
                  className={styles.image1160Icon}
                  alt=""
                  src="../image1160@2x.png"
                />
              </div>
            </div>
          </div>
          <img className={styles.groupIcon3} alt="" src="../group-122.svg" />
          <img className={styles.path894Icon} alt="" src="../path894.svg" />
          <img className={styles.vectorIcon} alt="" src="../vector-6.svg" />
          <img className={styles.vectorIcon1} alt="" src="../vector-111.svg" />
          <img className={styles.vectorIcon2} alt="" src="../vector-5.svg" />
          <img className={styles.vectorIcon3} alt="" src="../vector-121.svg" />
          <img className={styles.lineIcon} alt="" src="../line-251.svg" />
          <img className={styles.lineIcon1} alt="" src="../line-73.svg" />
          <div className={styles.lineDiv} />
          <div className={styles.lineDiv1} />
          <img className={styles.lineIcon2} alt="" src="../line-30.svg" />
          <img className={styles.lineIcon3} alt="" src="../line-75.svg" />
          <img className={styles.lineIcon4} alt="" src="../line-31.svg" />
          <img className={styles.lineIcon5} alt="" src="../line-76.svg" />
          <img className={styles.lineIcon6} alt="" src="../line-32.svg" />
          <img className={styles.lineIcon7} alt="" src="../line-77.svg" />
          <div className={styles.lineDiv2} />
          <div className={styles.lineDiv3} />
          <img className={styles.lineIcon8} alt="" src="../line-34.svg" />
          <img className={styles.lineIcon9} alt="" src="../line-79.svg" />
          <img className={styles.lineIcon10} alt="" src="../line-35.svg" />
          <img className={styles.lineIcon11} alt="" src="../line-80.svg" />
          <img className={styles.lineIcon12} alt="" src="../line-36.svg" />
          <img className={styles.lineIcon13} alt="" src="../line-81.svg" />
          <img className={styles.lineIcon14} alt="" src="../line-37.svg" />
          <img className={styles.lineIcon15} alt="" src="../line-82.svg" />
          <img className={styles.lineIcon16} alt="" src="../line-38.svg" />
          <img className={styles.lineIcon17} alt="" src="../line-83.svg" />
          <img className={styles.lineIcon18} alt="" src="../line-39.svg" />
          <img className={styles.lineIcon19} alt="" src="../line-84.svg" />
          <div className={styles.lineDiv4} />
          <div className={styles.lineDiv5} />
          <img className={styles.lineIcon20} alt="" src="../line-41.svg" />
          <img className={styles.lineIcon21} alt="" src="../line-86.svg" />
          <div className={styles.lineDiv6} />
          <div className={styles.lineDiv7} />
          <img className={styles.lineIcon22} alt="" src="../line-43.svg" />
          <img className={styles.lineIcon23} alt="" src="../line-88.svg" />
          <img className={styles.lineIcon24} alt="" src="../line-44.svg" />
          <img className={styles.lineIcon25} alt="" src="../line-89.svg" />
          <img className={styles.lineIcon26} alt="" src="../line-45.svg" />
          <img className={styles.lineIcon27} alt="" src="../line-90.svg" />
          <div className={styles.lineDiv8} />
          <div className={styles.lineDiv9} />
          <img className={styles.lineIcon28} alt="" src="../line-47.svg" />
          <img className={styles.lineIcon29} alt="" src="../line-92.svg" />
          <img className={styles.lineIcon30} alt="" src="../line-48.svg" />
          <img className={styles.lineIcon31} alt="" src="../line-93.svg" />
          <img className={styles.lineIcon32} alt="" src="../line-49.svg" />
          <img className={styles.lineIcon33} alt="" src="../line-94.svg" />
          <img className={styles.lineIcon34} alt="" src="../line-50.svg" />
          <img className={styles.lineIcon35} alt="" src="../line-95.svg" />
          <div className={styles.lineDiv10} />
          <div className={styles.lineDiv11} />
          <img className={styles.lineIcon36} alt="" src="../line-52.svg" />
          <img className={styles.lineIcon37} alt="" src="../line-97.svg" />
          <img className={styles.lineIcon38} alt="" src="../line-53.svg" />
          <img className={styles.lineIcon39} alt="" src="../line-98.svg" />
          <img className={styles.lineIcon40} alt="" src="../line-54.svg" />
          <img className={styles.lineIcon41} alt="" src="../line-99.svg" />
          <img className={styles.lineIcon42} alt="" src="../line-55.svg" />
          <img className={styles.lineIcon43} alt="" src="../line-100.svg" />
          <img className={styles.lineIcon44} alt="" src="../line-56.svg" />
          <img className={styles.lineIcon45} alt="" src="../line-101.svg" />
          <img className={styles.lineIcon46} alt="" src="../line-57.svg" />
          <img className={styles.lineIcon47} alt="" src="../line-102.svg" />
          <img className={styles.lineIcon48} alt="" src="../line-58.svg" />
          <img className={styles.lineIcon49} alt="" src="../line-103.svg" />
          <img className={styles.lineIcon50} alt="" src="../line-59.svg" />
          <img className={styles.lineIcon51} alt="" src="../line-104.svg" />
          <div className={styles.lineDiv12} />
          <div className={styles.lineDiv13} />
          <div className={styles.lineDiv14} />
          <div className={styles.lineDiv15} />
          <img className={styles.lineIcon52} alt="" src="../line-62.svg" />
          <img className={styles.lineIcon53} alt="" src="../line-107.svg" />
          <div className={styles.lineDiv16} />
          <div className={styles.lineDiv17} />
          <div className={styles.lineDiv18} />
          <div className={styles.lineDiv19} />
          <img className={styles.lineIcon54} alt="" src="../line-65.svg" />
          <img className={styles.lineIcon55} alt="" src="../line-110.svg" />
          <div className={styles.lineDiv20} />
          <div className={styles.lineDiv21} />
          <div className={styles.lineDiv22} />
          <div className={styles.lineDiv23} />
          <img className={styles.lineIcon56} alt="" src="../line-68.svg" />
          <img className={styles.lineIcon57} alt="" src="../line-113.svg" />
          <div className={styles.lineDiv24} />
          <div className={styles.lineDiv25} />
          <img className={styles.lineIcon58} alt="" src="../line-70.svg" />
          <img className={styles.lineIcon59} alt="" src="../line-115.svg" />
          <div className={styles.lineDiv26} />
          <div className={styles.lineDiv27} />
          <img className={styles.lineIcon60} alt="" src="../line-72.svg" />
          <img className={styles.lineIcon61} alt="" src="../line-117.svg" />
          <img className={styles.vectorIcon4} alt="" src="../vector-10.svg" />
          <img className={styles.vectorIcon5} alt="" src="../vector-131.svg" />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.g1152Div}>
            <div className={styles.g1152Div}>
              <div className={styles.rectangleDiv8} />
            </div>
            <div className={styles.backToHome}>Back To Home</div>
          </div>
        </div>
        <div className={styles.groupDiv15}>
          <b className={styles.ooB}>oo</b>
          <b className={styles.pB}>P</b>
          <b className={styles.sB}>s!</b>
        </div>
      </div>
      <img
        className={styles.image1174Icon}
        alt=""
        src="../image-11745@2x.png"
      />
    </div>
  );
};

export default NOTFOUND;
