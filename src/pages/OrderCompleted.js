import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OrderCompleted.module.css";

const OrderCompleted = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onProductsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogText3Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onShopText1Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHektoText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer16Click = useCallback(() => {
    navigate("/grid-default");
  }, [navigate]);

  return (
    <div className={styles.orderCompletedDiv}>
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
          <img className={styles.groupIcon} alt="" src="../group-2058.svg" />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <img className={styles.rectangleIcon} alt="" />
          <div className={styles.groupDiv4}>
            <div className={styles.div}>.</div>
            <div className={styles.div1}>.</div>
            <div className={styles.homeDiv}>{`Home `}</div>
            <div className={styles.pagesDiv1}>Pages</div>
            <div className={styles.productDetailsDiv}>Product Details</div>
            <b className={styles.productDetailsB}>Product Details</b>
          </div>
          <div className={styles.headingBarDiv}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.englishDiv}>English</div>
            <div className={styles.uSDDiv}>USD</div>
            <div className={styles.loginDiv}>Login</div>
            <div className={styles.wishlistDiv}>Wishlist</div>
            <div className={styles.mhhasanulgmailcomDiv}>
              mhhasanul@gmail.com
            </div>
            <div className={styles.div2}>(12345)67890</div>
            <img className={styles.uilenvelopeAltIcon} alt="" />
            <img className={styles.bxbxPhoneCallIcon} alt="" />
            <img className={styles.groupIcon1} alt="" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv2}>Pages</div>
            <div className={styles.productsDiv}>Products</div>
            <div className={styles.blogDiv2}>{`Blog `}</div>
            <div className={styles.shopDiv}>Shop</div>
            <div className={styles.contactDiv}>Contact</div>
            <div className={styles.groupDiv5}>
              <div className={styles.rectangleDiv5} />
              <div className={styles.groupDiv6}>
                <div className={styles.rectangleDiv6} />
              </div>
            </div>
            <b className={styles.hektoB}>Hekto</b>
            <div className={styles.groupDiv7}>
              <div className={styles.homeDiv1}>Home</div>
            </div>
            <img className={styles.akarIconschevronDown} alt="" />
            <img className={styles.uilsearchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.groupDiv3}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-115.svg"
          />
          <div className={styles.groupDiv10}>
            <div className={styles.div3}>.</div>
            <div className={styles.div4}>.</div>
            <div className={styles.homeDiv2}>{`Home `}</div>
            <div className={styles.pagesDiv3}>Pages</div>
            <div className={styles.bookingCompletedDiv}>Booking Completed</div>
            <b className={styles.productDetailsB}>Booking Completed</b>
          </div>
          <div className={styles.headingBarDiv}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.englishDiv1}>English</div>
            <div className={styles.uSDDiv1}>USD</div>
            <div className={styles.loginDiv1}>Login</div>
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
            <img className={styles.groupIcon2} alt="" src="../group-174.svg" />
          </div>
          <div className={styles.navBarDiv}>
            <div className={styles.pagesDiv2}>Hostels</div>
            <div className={styles.productsDiv1} onClick={onProductsText1Click}>
              About Us
            </div>
            <div
              className={styles.blogDiv3}
              onClick={onBlogText3Click}
            >{`Blog `}</div>
            <div className={styles.shopDiv1} onClick={onShopText1Click}>
              Contact
            </div>
            <div className={styles.contactDiv1}>Contact</div>
            <div className={styles.groupDiv5}>
              <div className={styles.rectangleDiv5} />
              <div className={styles.groupDiv6}>
                <div className={styles.rectangleDiv6} />
              </div>
            </div>
            <b className={styles.hektoB1} onClick={onHektoText1Click}>
              Mycribs
            </b>
            <div
              className={styles.groupDiv13}
              onClick={onGroupContainer11Click}
            >
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
              src="../uilsearch5.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.groupDiv14} onClick={onGroupContainer16Click}>
        <img className={styles.vectorIcon} alt="" src="../vector-161.svg" />
        <div className={styles.thankYouForBookingForARe}>
          <p
            className={styles.thankYouFor}
          >{`Thank you for booking for a rental with us! Your order is being processed and  member of our team will reach out to you `}</p>
          <p className={styles.thankYouFor}>
            in the next 30 minutes. You will also receive an email confirmation
            when your order is completed.
          </p>
        </div>
        <div className={styles.groupDiv15}>
          <b
            className={styles.yourBookingIsCompleted}
          >{`Your Booking Is Completed! `}</b>
        </div>
        <div className={styles.groupDiv16}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.continueBrowsingDiv}>Continue Browsing</div>
        </div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-70.svg" />
        <img className={styles.vectorIcon1} alt="" src="../vector-151.svg" />
      </div>
      <img className={styles.image1174Icon} alt="" src="../image-1175@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <div className={styles.lineDiv2} />
      <div className={styles.lineDiv3} />
      <div className={styles.lineDiv4} />
      <div className={styles.lineDiv5} />
      <div className={styles.lineDiv6} />
      <div className={styles.lineDiv7} />
      <div className={styles.lineDiv8} />
      <div className={styles.lineDiv9} />
      <div className={styles.lineDiv10} />
      <div className={styles.lineDiv11} />
      <div className={styles.lineDiv12} />
      <div className={styles.lineDiv13} />
      <div className={styles.lineDiv14} />
      <div className={styles.lineDiv15} />
      <div className={styles.lineDiv16} />
      <div className={styles.lineDiv17} />
      <div className={styles.lineDiv18} />
      <div className={styles.lineDiv19} />
      <div className={styles.lineDiv20} />
      <div className={styles.lineDiv21} />
      <div className={styles.lineDiv22} />
      <div className={styles.lineDiv23} />
      <div className={styles.lineDiv24} />
      <div className={styles.lineDiv25} />
      <div className={styles.lineDiv26} />
      <div className={styles.lineDiv27} />
      <div className={styles.lineDiv28} />
      <div className={styles.lineDiv29} />
      <div className={styles.lineDiv30} />
      <div className={styles.lineDiv31} />
      <div className={styles.lineDiv32} />
      <div className={styles.lineDiv33} />
      <div className={styles.lineDiv34} />
      <div className={styles.lineDiv35} />
      <div className={styles.lineDiv36} />
      <div className={styles.lineDiv37} />
      <div className={styles.lineDiv38} />
      <div className={styles.lineDiv39} />
      <div className={styles.lineDiv40} />
      <div className={styles.lineDiv41} />
      <div className={styles.lineDiv42} />
      <div className={styles.lineDiv43} />
      <div className={styles.lineDiv44} />
      <div className={styles.lineDiv45} />
      <div className={styles.lineDiv46} />
      <div className={styles.lineDiv47} />
      <div className={styles.lineDiv48} />
      <div className={styles.lineDiv49} />
      <div className={styles.lineDiv50} />
      <div className={styles.lineDiv51} />
      <div className={styles.lineDiv52} />
      <div className={styles.lineDiv53} />
      <div className={styles.lineDiv54} />
      <div className={styles.lineDiv55} />
      <div className={styles.lineDiv56} />
      <div className={styles.lineDiv57} />
      <div className={styles.lineDiv58} />
      <div className={styles.lineDiv59} />
      <div className={styles.lineDiv60} />
      <div className={styles.lineDiv61} />
      <div className={styles.lineDiv62} />
      <div className={styles.lineDiv63} />
      <div className={styles.lineDiv64} />
      <div className={styles.lineDiv65} />
      <div className={styles.lineDiv66} />
      <div className={styles.lineDiv67} />
      <div className={styles.lineDiv68} />
      <div className={styles.lineDiv69} />
      <div className={styles.lineDiv70} />
      <div className={styles.lineDiv71} />
      <div className={styles.lineDiv72} />
      <div className={styles.lineDiv73} />
      <div className={styles.lineDiv74} />
      <div className={styles.lineDiv75} />
      <div className={styles.lineDiv76} />
      <div className={styles.lineDiv77} />
      <div className={styles.lineDiv78} />
      <div className={styles.lineDiv79} />
      <div className={styles.lineDiv80} />
      <div className={styles.lineDiv81} />
      <div className={styles.lineDiv82} />
      <div className={styles.lineDiv83} />
      <div className={styles.lineDiv84} />
      <div className={styles.lineDiv85} />
      <div className={styles.lineDiv86} />
      <div className={styles.lineDiv87} />
      <div className={styles.lineDiv88} />
      <div className={styles.lineDiv89} />
      <div className={styles.lineDiv90} />
      <div className={styles.lineDiv91} />
      <div className={styles.lineDiv92} />
      <div className={styles.lineDiv93} />
      <div className={styles.lineDiv94} />
      <div className={styles.lineDiv95} />
      <div className={styles.lineDiv96} />
      <div className={styles.lineDiv97} />
      <div className={styles.lineDiv98} />
      <div className={styles.lineDiv99} />
      <div className={styles.lineDiv100} />
      <div className={styles.lineDiv101} />
      <div className={styles.lineDiv102} />
      <div className={styles.lineDiv103} />
      <div className={styles.lineDiv104} />
      <div className={styles.lineDiv105} />
      <div className={styles.lineDiv106} />
      <div className={styles.lineDiv107} />
      <div className={styles.lineDiv108} />
      <div className={styles.lineDiv109} />
      <div className={styles.lineDiv110} />
      <div className={styles.lineDiv111} />
      <div className={styles.lineDiv112} />
      <div className={styles.lineDiv113} />
      <div className={styles.lineDiv114} />
      <div className={styles.lineDiv115} />
      <div className={styles.lineDiv116} />
      <div className={styles.lineDiv117} />
      <div className={styles.lineDiv118} />
      <div className={styles.lineDiv119} />
      <div className={styles.lineDiv120} />
      <div className={styles.lineDiv121} />
      <div className={styles.lineDiv122} />
      <div className={styles.lineDiv123} />
      <div className={styles.lineDiv124} />
      <div className={styles.lineDiv125} />
      <div className={styles.lineDiv126} />
      <div className={styles.lineDiv127} />
      <div className={styles.lineDiv128} />
      <div className={styles.lineDiv129} />
      <div className={styles.lineDiv130} />
      <div className={styles.lineDiv131} />
      <div className={styles.lineDiv132} />
      <div className={styles.lineDiv133} />
      <div className={styles.lineDiv134} />
      <div className={styles.lineDiv135} />
      <div className={styles.lineDiv136} />
      <div className={styles.lineDiv137} />
      <div className={styles.lineDiv138} />
      <div className={styles.lineDiv139} />
      <div className={styles.lineDiv140} />
      <div className={styles.lineDiv141} />
      <div className={styles.lineDiv142} />
      <div className={styles.lineDiv143} />
      <div className={styles.lineDiv144} />
      <div className={styles.lineDiv145} />
      <div className={styles.lineDiv146} />
      <div className={styles.lineDiv147} />
      <div className={styles.lineDiv148} />
      <div className={styles.lineDiv149} />
      <div className={styles.lineDiv150} />
      <div className={styles.lineDiv151} />
      <div className={styles.lineDiv152} />
      <div className={styles.lineDiv153} />
      <div className={styles.lineDiv154} />
      <div className={styles.lineDiv155} />
      <div className={styles.lineDiv156} />
      <div className={styles.lineDiv157} />
      <div className={styles.lineDiv158} />
      <img className={styles.clock1Icon} alt="" src="../clock-1.svg" />
      <img className={styles.checklist1Icon} alt="" src="../checklist-1.svg" />
      <div className={styles.groupDiv17}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.aetotechsAllRightsReserve}>
            ©Aetotechs - All Rights Reserved
          </div>
        </div>
        <img className={styles.groupIcon3} alt="" src="../group-2058.svg" />
      </div>
    </div>
  );
};

export default OrderCompleted;
