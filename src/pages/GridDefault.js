import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GridDefault.module.css";

const GridDefault = () => {
  const navigate = useNavigate();

  const onClaritygridViewSolidIconClick = useCallback(() => {
    navigate("/shop-left-sidebar");
  }, [navigate]);

  const onFaSolidlistIconClick = useCallback(() => {
    navigate("/shop-list");
  }, [navigate]);

  const onEcommerceAccesoriesContainerClick = useCallback(() => {
    navigate("/product-details");
  }, [navigate]);

  const onFAQsTextClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onPagesText2Click = useCallback(() => {
    navigate("/shop-list");
  }, [navigate]);

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBlogText2Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHektoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer46Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.gridDefaultDiv}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-115.svg" />
      <div className={styles.groupDiv}>
        <div className={styles.div}>.</div>
        <div className={styles.div1}>.</div>
        <div className={styles.homeDiv}>{`Home `}</div>
        <div className={styles.pagesDiv}>Pages</div>
        <div className={styles.hostelsGridView}>Hostels - Grid View</div>
        <b className={styles.hostelsGridView1}>Hostels - Grid View</b>
      </div>
      <div className={styles.pageSortBy}>
        <b className={styles.ecommerceAcceoriesFashion}>Hostels</b>
        <div className={styles.about9620Results062Seco}>
          About 9,620 results (0.62 seconds)
        </div>
        <div className={styles.perPageDiv}>Per Page:</div>
        <div className={styles.sortByDiv}>Sort By:</div>
        <div className={styles.viewDiv}>View:</div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
        </div>
        <img
          className={styles.claritygridViewSolidIcon}
          alt=""
          src="../claritygridviewsolid1.svg"
          onClick={onClaritygridViewSolidIconClick}
        />
        <img
          className={styles.faSolidlistIcon}
          alt=""
          src="../fasolidlist2.svg"
          onClick={onFaSolidlistIconClick}
        />
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.groupDiv4}>
            <img
              className={styles.akarIconschevronDown}
              alt=""
              src="../akariconschevrondown14.svg"
            />
            <div className={styles.bestMatchDiv}>Location</div>
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div
        className={styles.ecommerceAccesoriesDiv}
        onClick={onEcommerceAccesoriesContainerClick}
      >
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-351@2x.png"
            />
            <b className={styles.jonathanAdlerChair}>{`St. Mary’s Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv8}>
              <div className={styles.div2}>$42.00</div>
              <div className={styles.div3}>SIngle - 350, 000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-49.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv1}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-352@2x.png"
            />
            <b className={styles.jonathanAdlerChair1}>{`B hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv11}>
              <div className={styles.div4}>$42.00</div>
              <div className={styles.div3}>Triple - 200,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-491.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv2}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-353@2x.png"
            />
            <b className={styles.jonathanAdlerChair2}>D Hostel</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv14}>
              <div className={styles.div6} />
              <div className={styles.div3}>Single - 550,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-492.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <div className={styles.div8} />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv3}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair2}>{`H Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv17}>
              <div className={styles.div9}>$42.00</div>
              <div className={styles.div3}>SIngle - 940,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-493.svg" />
        </div>
        <img
          className={styles.image1164Icon3}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv4}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair1}>R Hostel</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv17}>
              <div className={styles.div9}>$42.00</div>
              <div className={styles.div3}>Single - 480,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-494.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon3} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv5}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair1}>P Hostel</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv23}>
              <div className={styles.div13}>$42.00</div>
              <div className={styles.div3}>Double - 450,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-495.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon5}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv6}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair2}>{`N Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv26}>
              <div className={styles.div15}>$42.00</div>
              <div className={styles.div3}>Single 800,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-496.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon6} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv7}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair7}>{`M Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv29}>
              <div className={styles.div17}>dfdf</div>
              <div className={styles.div3}>Double 450,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-497.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon7}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv8}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair2}>G Hostel</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv23}>
              <div className={styles.div13}>$42.00</div>
              <div className={styles.div3}>Double - 340,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-498.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img
          className={styles.purepng1Icon8}
          alt=""
          src="../purepng-1@2x.png"
        />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv9}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair9}>{`F Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv17}>
              <div className={styles.div9}>$42.00</div>
              <div className={styles.div3}>Single - 440,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-499.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img className={styles.unnamed1Icon} alt="" src="../unnamed-1@2x.png" />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon9}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv10}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv3} />
            <b className={styles.jonathanAdlerChair1}>{`E Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv38}>
              <div className={styles.div23}>mm</div>
              <div className={styles.div3}>Single - 600,000</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="../group-4910.svg" />
        </div>
        <img
          className={styles.image1164Icon}
          alt=""
          src="../image-1164@2x.png"
        />
        <img
          className={styles.image1172Icon}
          alt=""
          src="../image-1172@2x.png"
        />
        <img className={styles.image9Icon} alt="" src="../image-95@2x.png" />
        <img className={styles.purepng1Icon} alt="" src="../purepng-1@2x.png" />
        <img
          className={styles.czNmcy1wcml2YXRlL3Jhd3BpeGVsX2Icon}
          alt=""
          src="../cznmcy1wcml2yxrll3jhd3bpegvsx2ltywdlcy93zwjzaxrlx2nvbnrlbnqvcgytczczlxbhas0xntgta2fuyxrlltaxlnbuzw-1@2x.png"
        />
        <img
          className={styles.image1173Icon}
          alt=""
          src="../image-1173@2x.png"
        />
        <img className={styles.icon} alt="" src="../10011-1@2x.png" />
        <img className={styles.drone2Icon} alt="" src="../drone-2@2x.png" />
        <img
          className={styles.unnamed1Icon10}
          alt=""
          src="../unnamed-1@2x.png"
        />
        <img className={styles.cam2Icon} alt="" src="../cam-2@2x.png" />
        <img
          className={styles.movadoConnect15621730942Icon}
          alt=""
          src="../1562173100movadoconnect1562173094-2@2x.png"
        />
        <img
          className={styles.res7e24bf6d78bbb2518489d0af84Icon}
          alt=""
          src="../res-7e24bf6d78bbb2518489d0af847413c9-450x450-fcp0-2@2x.png"
        />
      </div>
      <div className={styles.ecommerceAccesoriesDiv11}>
        <div className={styles.groupDiv6}>
          <div className={styles.groupDiv4}>
            <img
              className={styles.rectangleIcon1}
              alt=""
              src="../rectangle-351@2x.png"
            />
            <b className={styles.jonathanAdlerChair2}>{`A Hostel `}</b>
            <img className={styles.groupIcon} alt="" src="../group-44.svg" />
            <div className={styles.groupDiv23}>
              <div className={styles.div13}>$42.00</div>
              <div className={styles.div3}>Double - 300,000</div>
            </div>
          </div>
          <img className={styles.groupIcon23} alt="" src="../group-4911.svg" />
        </div>
        <img
          className={styles.image1165Icon}
          alt=""
          src="../image-1165@2x.png"
        />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.rectangleDiv11} />
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
          <div className={styles.pagesDiv1}>Pages</div>
          <div className={styles.contactInfoDiv}>Contact Info</div>
          <div className={styles.plot32ChurchRoadEntebbeUg}>
            24223 Plot 32 Church Road Entebbe Uganda
          </div>
          <div className={styles.rectangleDiv12} />
          <div className={styles.enterEmailAddress}>Enter Email Address</div>
          <div className={styles.rectangleDiv13} />
          <div className={styles.signUpDiv}>Sign Up</div>
        </div>
        <div className={styles.groupDiv42}>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv14} />
            <div className={styles.aetotechsAllRightsReserve}>
              ©Aetotechs - All Rights Reserved
            </div>
          </div>
          <img className={styles.groupIcon24} alt="" src="../group-20529.svg" />
        </div>
      </div>
      <div className={styles.headingBarDiv}>
        <div className={styles.rectangleDiv15} />
        <div className={styles.englishDiv}>English</div>
        <div className={styles.uSDDiv}>USD</div>
        <div className={styles.loginDiv}>Login</div>
        <div className={styles.wishlistDiv}>Wishlist</div>
        <div className={styles.mhhasanulgmailcomDiv}>mycribs@aetotechs.com</div>
        <div className={styles.div27}>(256)750 584 763</div>
        <img
          className={styles.uilenvelopeAltIcon}
          alt=""
          src="../uilenvelopealt14.svg"
        />
        <img
          className={styles.bxbxPhoneCallIcon}
          alt=""
          src="../bxbxphonecall4.svg"
        />
        <img className={styles.groupIcon25} alt="" src="../group-176.svg" />
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.pagesDiv2} onClick={onPagesText2Click}>
          Hostels
        </div>
        <div className={styles.productsDiv} onClick={onProductsTextClick}>
          About Us
        </div>
        <div
          className={styles.blogDiv2}
          onClick={onBlogText2Click}
        >{`Blog `}</div>
        <div className={styles.shopDiv} onClick={onShopTextClick}>
          Contact
        </div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.groupDiv44}>
          <div className={styles.rectangleDiv16} />
          <div className={styles.groupDiv45}>
            <div className={styles.rectangleDiv17} />
          </div>
        </div>
        <b className={styles.hektoB} onClick={onHektoTextClick}>
          Mycribs
        </b>
        <div className={styles.groupDiv46} onClick={onGroupContainer46Click}>
          <div className={styles.homeDiv1}>Home</div>
        </div>
        <img
          className={styles.akarIconschevronDown1}
          alt=""
          src="../akariconschevrondown.svg"
        />
        <img className={styles.uilsearchIcon} alt="" src="../uilsearch16.svg" />
      </div>
      <img className={styles.image1174Icon} alt="" src="../image-1174@2x.png" />
    </div>
  );
};

export default GridDefault;
