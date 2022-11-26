import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./SingleBlog.module.css";

const SingleBlog = () => {
  const navigate = useNavigate();

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText3Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.singleBlogDiv}>
      <div className={styles.groupDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-115.svg"
        />
        <div className={styles.div}>.</div>
        <div className={styles.div1}>.</div>
        <div className={styles.homeDiv}>{`Home `}</div>
        <div className={styles.pagesDiv}>Pages</div>
        <div className={styles.blogDiv}> Blog</div>
        <b className={styles.ourBlog}>Our Blog</b>
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
        <NavBar />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv1} />
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
          <div className={styles.blogDiv2} onClick={onBlogText3Click}>
            Blog
          </div>
          <div
            className={styles.aboutUsDiv}
            onClick={onAboutUsTextClick}
          >{`About Us `}</div>
          <div className={styles.contactUsDiv}>Contact Us</div>
          <b className={styles.mycribs}>Mycribs</b>
          <div className={styles.categoriesDiv}>Categories</div>
          <div className={styles.myPageDiv}>My Page</div>
          <div className={styles.pagesDiv1}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv2} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv3} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-2051.svg" />
        </div>
      </div>
      <div className={styles.groupDiv3}>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.saveCommentDiv}>Save Comment</div>
        </div>
        <div className={styles.saveMyNameEmailAndWebsi}>
          Save my name, email, and website in this browser for the next time I
          comment.
        </div>
        <img className={styles.uilcheckIcon} alt="" src="../uilcheck.svg" />
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.yourNameDiv}>Your Name*</div>
          <img className={styles.userIcon} alt="" src="../user.svg" />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.writeYourEmail}>Write Your Email*</div>
          <img className={styles.mailIcon} alt="" src="../mail.svg" />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.writeYourComment}>Write your comment*</div>
          <img
            className={styles.messageCircleIcon}
            alt=""
            src="../messagecircle.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.rectangleDiv9} />
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="../rectangle-59@2x.png"
        />
        <div className={styles.sapienDiv}>Sapien</div>
        <div className={styles.jan092020}>Jan 09 2020</div>
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
          rutrum vulputate consectetur.
        </div>
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.rectangleDiv9} />
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="../rectangle-591@2x.png"
        />
        <div className={styles.augueDiv}>{`Augue `}</div>
        <div className={styles.aug182020}>Aug 18 2020</div>
        <div className={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
          rutrum vulputate consectetur.
        </div>
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.rectangleDiv11} />
        <div className={styles.groupDiv11}>
          <div className={styles.nextPostDiv}>Next Post</div>
          <img className={styles.upArrow1Icon} alt="" src="../uparrow-1.svg" />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.previousPostDiv}>Previous Post</div>
          <img className={styles.upArrow2Icon} alt="" src="../uparrow-2.svg" />
        </div>
      </div>
      <div className={styles.lineDiv} />
      <img className={styles.groupIcon2} alt="" src="../group-92.svg" />
      <div className={styles.groupDiv13}>
        <img
          className={styles.rectangleIcon3}
          alt=""
          src="../rectangle-70@2x.png"
        />
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.rectangleDiv12} />
        <div className={styles.rectangleDiv13} />
      </div>
      <div className={styles.itIsALongEstablishFact}>
        <div className={styles.groupDiv15}>
          <b className={styles.itIsALongEstablishedFact}>
            What To Look For In A Hostel In Kampala
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo2}>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum
            </p>
            <p className={styles.toamkRisusuP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at.
            </p>
          </div>
        </div>
        <div className={styles.groupDiv16}>
          <b className={styles.itIsALongEstablishedFact}>
            Aenean vitae in aliquam ultrices lectus. Etiam.
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </div>
        </div>
        <div className={styles.groupDiv17}>
          <b
            className={styles.itIsALongEstablishedFact}
          >{`Sit nam congue feugiat nisl, mauris amet nisi. `}</b>
          <div className={styles.loremIpsumDolorSitAmetCo2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </div>
        </div>
        <div className={styles.groupDiv18}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-33.svg" />
          <div className={styles.readMoreDiv}>{`Read More `}</div>
        </div>
        <div className={styles.groupDiv19}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-33.svg" />
          <div className={styles.readMoreDiv}>{`Read More `}</div>
        </div>
        <div className={styles.groupDiv20}>
          <img className={styles.ellipseIcon} alt="" src="../ellipse-33.svg" />
          <div className={styles.readMoreDiv}>{`Read More `}</div>
        </div>
      </div>
      <img
        className={styles.bruceMarsFWVMhUaWbYUnsplasIcon}
        alt=""
        src="../brucemarsfwvmhua-wbyunsplash-2@2x.png"
      />
      <div className={styles.authorAndDate}>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv14} />
          <div className={styles.groupDiv22}>
            <div className={styles.groupDiv2}>
              <div className={styles.rectangleDiv15} />
              <img
                className={styles.uilcalendarAltIcon}
                alt=""
                src="../uilcalendaralt3.svg"
              />
              <div className={styles.aug092020}>Aug 09 2020</div>
              <div className={styles.surfAuxionDiv}>Jim</div>
            </div>
          </div>
          <div className={styles.mdifountainPenTipDiv} />
        </div>
        <img className={styles.vectorIcon} alt="" src="../vector5.svg" />
      </div>
      <div className={styles.groupDiv24}>
        <div className={styles.rectangleDiv16} />
        <div className={styles.groupDiv25}>
          <div className={styles.searchForPosts}>Search For Posts</div>
        </div>
        <img className={styles.searchIcon} alt="" src="../search.svg" />
        <div className={styles.searchDiv}>Search</div>
      </div>
      <div className={styles.groupDiv26}>
        <div className={styles.recentPostDiv}>
          <div className={styles.groupDiv27}>
            <div className={styles.aug0920201}>Aug 09 2020</div>
            <div className={styles.loremIpsumDiv}>Lorem Ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="../rectangle-126@2x.png"
          />
        </div>
        <div className={styles.recentPostDiv1}>
          <div className={styles.groupDiv27}>
            <div className={styles.aug0920201}>Apr 09 2019</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="../rectangle-1261@2x.png"
          />
        </div>
        <div className={styles.recentPostDiv2}>
          <div className={styles.groupDiv27}>
            <div className={styles.aug0920201}>Aug 09 2022</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="../rectangle-1262@2x.png"
          />
        </div>
        <div className={styles.recentPostDiv3}>
          <div className={styles.groupDiv27}>
            <div className={styles.aug0920201}>Aug 09 2008</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon4}
            alt=""
            src="../rectangle-1263@2x.png"
          />
        </div>
      </div>
      <div className={styles.groupDiv31}>
        <div className={styles.recentPostDiv4}>
          <div className={styles.groupDiv32}>
            <div className={styles.aug0920201}>Aug 09 2020</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon8}
            alt=""
            src="../rectangle-1264@2x.png"
          />
        </div>
        <div className={styles.recentPostDiv5}>
          <div className={styles.groupDiv32}>
            <div className={styles.aug0920201}>Aug 09 2020</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon8}
            alt=""
            src="../rectangle-1265@2x.png"
          />
        </div>
        <div className={styles.recentPostDiv6}>
          <div className={styles.groupDiv32}>
            <div className={styles.aug0920201}>Aug 09 2020</div>
            <div className={styles.loremIpsumDiv}>Lorem ipsum</div>
          </div>
          <img
            className={styles.rectangleIcon8}
            alt=""
            src="../rectangle-1266@2x.png"
          />
        </div>
      </div>
      <div className={styles.groupDiv35}>
        <div className={styles.groupDiv36}>
          <div className={styles.catagoryButton}>
            <div className={styles.rectangleDiv17} />
            <div className={styles.women21Div}>Commercial Buildings (21)</div>
          </div>
          <div className={styles.catagoryButton1}>
            <div className={styles.rectangleDiv17} />
            <div className={styles.women21Div}>Land (21)</div>
          </div>
          <div className={styles.catagoryButton2}>
            <div className={styles.rectangleDiv17} />
            <div className={styles.women21Div}>Leases (21)</div>
          </div>
          <div className={styles.catagoryButton3}>
            <div className={styles.rectangleDiv17} />
            <div className={styles.women21Div}>Hostels (14)</div>
          </div>
          <div className={styles.catagoryButton4}>
            <div className={styles.rectangleDiv17} />
            <div className={styles.women21Div}>Rentals (21)</div>
          </div>
          <div className={styles.catagoryButton5}>
            <div className={styles.rectangleDiv22} />
            <div className={styles.women21Div}>Apartments (12)</div>
          </div>
        </div>
        <div className={styles.categoriesDiv1}>Categories</div>
      </div>
      <div className={styles.recentPostsDiv}>Recent Posts</div>
      <div className={styles.hostelsInUganda}>Hostels in Uganda</div>
      <img
        className={styles.image1174Icon}
        alt=""
        src="../image-11741@2x.png"
      />
      <div className={styles.loremIpsumDolorSitAmetCo5}>
        <p className={styles.loremIpsumDolor}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat.
        </p>
        <p className={styles.loremIpsumDolor}>&nbsp;</p>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
          dictum sapien, amet, consequat
        </p>
        <p className={styles.loremIpsumDolor}>&nbsp;</p>
        <p className={styles.toamkRisusuP}>toamk risusu”</p>
      </div>
      <div
        className={styles.loremIpsumDolorSitAmetCo6}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo7}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo8}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo9}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo10}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo11}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <div
        className={styles.loremIpsumDolorSitAmetCo12}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, `}</div>
      <img className={styles.groupIcon3} alt="" src="../group-213.svg" />
    </div>
  );
};

export default SingleBlog;
