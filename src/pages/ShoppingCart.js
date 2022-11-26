import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const onGroupContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle25Click = useCallback(() => {
    navigate("/shop-left-sidebar");
  }, [navigate]);

  const onGroupContainer16Click = useCallback(() => {
    navigate("/order-completed");
  }, [navigate]);

  return (
    <div className={styles.shoppingCartDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv} />
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
          <img className={styles.groupIcon} alt="" src="../group-2056.svg" />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon1} alt="" src="../group-2056.svg" />
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
          src="../uilenvelopealt4.svg"
        />
        <img
          className={styles.bxbxPhoneCallIcon}
          alt=""
          src="../bxbxphonecall4.svg"
        />
        <img className={styles.groupIcon2} alt="" src="../group-174.svg" />
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.pagesDiv1}>Hostels</div>
        <div className={styles.productsDiv}>About Us</div>
        <div className={styles.blogDiv2}>{`Blog `}</div>
        <div className={styles.shopDiv}>Contact</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv7} />
          </div>
        </div>
        <b className={styles.hektoB}>Mycribs</b>
        <div className={styles.groupDiv6} onClick={onGroupContainer6Click}>
          <div className={styles.homeDiv}>Home</div>
        </div>
        <img
          className={styles.akarIconschevronDown}
          alt=""
          src="../akariconschevrondown.svg"
        />
        <img className={styles.uilsearchIcon} alt="" src="../uilsearch4.svg" />
      </div>
      <div className={styles.groupDiv7}>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv8} />
          <div
            className={styles.shippingTaxesCalculatedAt}
          >{`Shipping & taxes calculated at checkout`}</div>
          <div className={styles.subtotalsDiv}>Subtotals:</div>
          <div className={styles.totalsDiv}>Totals:</div>
          <div className={styles.div1}>‎£219.00</div>
          <div className={styles.div2}>‎£325.00</div>
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv9} />
            <b className={styles.proceedToCheckout}>Proceed To Checkout</b>
          </div>
          <img className={styles.uilcheckIcon} alt="" src="../uilcheck4.svg" />
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv1} />
      </div>
      <div className={styles.lineDiv2} />
      <div className={styles.div3}>$32.00</div>
      <div className={styles.div4}>‎£219.00</div>
      <div className={styles.aHostelDiv}>A Hostel</div>
      <div className={styles.loremIpsum}>Lorem ipsum :</div>
      <b className={styles.hostelB}>Hostel</b>
      <b className={styles.priceB}>Price</b>
      <b className={styles.noOfUnits}>No. of Units</b>
      <b className={styles.totalB}>Total</b>
      <b className={styles.totalsB}> Totals</b>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-341@2x.png"
      />
      <img className={styles.groupIcon3} alt="" src="../group-43.svg" />
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>1</div>
        <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.lineDiv3} />
      <div className={styles.lineDiv4} />
      <div className={styles.lineDiv5} />
      <div className={styles.lineDiv6} />
      <div className={styles.div6}>$32.00</div>
      <div className={styles.div7}>$32.00</div>
      <div className={styles.div8}>$32.00</div>
      <div className={styles.div9}>$32.00</div>
      <div className={styles.div10}>‎£219.00</div>
      <div className={styles.div11}>‎£219.00</div>
      <div className={styles.div12}>‎£219.00</div>
      <div className={styles.div13}>‎£219.00</div>
      <div className={styles.bHostelDiv}>B Hostel</div>
      <div className={styles.cHostelDiv}>C Hostel</div>
      <div className={styles.dHostelDiv}>D Hostel</div>
      <div className={styles.proinPharetraElementum}>
        Proin pharetra elementum
      </div>
      <div className={styles.proinPharetraIpsum}>Proin pharetra ipsum</div>
      <div className={styles.vitaeSetimsbulumIpSum}>
        <p className={styles.vitaeSetimsbulumIp}>vitae setimsbulum ip</p>
        <p className={styles.sumP}>sum</p>
      </div>
      <div className={styles.pharentraLipsumDdeteaer}>
        pharentra lipsum ddeteaer
      </div>
      <div className={styles.colorDiv}>Color:</div>
      <div className={styles.sizeDiv}>Size:</div>
      <div className={styles.brownDiv}>Brown</div>
      <div className={styles.xLDiv}>XL</div>
      <img
        className={styles.rectangleIcon1}
        alt=""
        src="../rectangle-35@2x.png"
      />
      <img
        className={styles.rectangleIcon2}
        alt=""
        src="../rectangle-36@2x.png"
      />
      <img
        className={styles.rectangleIcon3}
        alt=""
        src="../rectangle-37@2x.png"
      />
      <img
        className={styles.rectangleIcon4}
        alt=""
        src="../rectangle-34@2x.png"
      />
      <img className={styles.groupIcon4} alt="" src="../group-43.svg" />
      <img className={styles.groupIcon5} alt="" src="../group-249.svg" />
      <img className={styles.groupIcon6} alt="" src="../group-249.svg" />
      <img className={styles.groupIcon7} alt="" src="../group-249.svg" />
      <div className={styles.groupDiv11}>
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>1</div>
        <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>1</div>
        <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.groupDiv13}>
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>1</div>
        <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>1</div>
        <img className={styles.vectorIcon} alt="" src="../vector6.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
        <img className={styles.vectorIcon2} alt="" src="../vector8.svg" />
      </div>
      <div className={styles.rectangleDiv25} onClick={onRectangle25Click} />
      <div className={styles.rectangleDiv26} />
      <div className={styles.updateCartDiv}>Update Cart</div>
      <div className={styles.clearCartDiv}>Clear Cart</div>
      <img
        className={styles.rectangleIcon5}
        alt=""
        src="../rectangle-115.svg"
      />
      <div className={styles.groupDiv15}>
        <div className={styles.div18}>.</div>
        <div className={styles.div19}>.</div>
        <div className={styles.homeDiv1}>{`Home `}</div>
        <div className={styles.pagesDiv2}>Pages</div>
        <div className={styles.cartDiv}>Cart</div>
        <b className={styles.cartB}>Cart</b>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.shippingTaxesCalculatedAt}>
            All other costs are totalled up at Checkout
          </div>
          <div className={styles.subtotalsDiv}>Subtotals:</div>
          <div className={styles.totalsDiv}>Totals:</div>
          <div className={styles.div1}>‎£219.00</div>
          <div className={styles.div2}>‎£325.00</div>
          <div className={styles.groupDiv18} onClick={onGroupContainer16Click}>
            <div className={styles.rectangleDiv9} />
            <b className={styles.proceedToCheckout}>Proceed To Checkout</b>
          </div>
          <img className={styles.uilcheckIcon} alt="" src="../uilcheck4.svg" />
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv1} />
      </div>
    </div>
  );
};

export default ShoppingCart;
