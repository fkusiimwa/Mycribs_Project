import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onProductsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onShopTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHektoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.navBarDiv}>
      <div className={styles.pagesDiv}>Hostels</div>
      <div className={styles.productsDiv} onClick={onProductsTextClick}>
        About Us
      </div>
      <div className={styles.blogDiv}>{`Blog `}</div>
      <div className={styles.shopDiv} onClick={onShopTextClick}>
        Contact
      </div>
      <div className={styles.contactDiv}>Contact</div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
        </div>
      </div>
      <b className={styles.hektoB} onClick={onHektoTextClick}>
        Mycribs
      </b>
      <div className={styles.groupDiv2} onClick={onGroupContainer2Click}>
        <div className={styles.homeDiv}>Home</div>
      </div>
      <img
        className={styles.akarIconschevronDown}
        alt=""
        src="../akariconschevrondown.svg"
      />
      <img className={styles.uilsearchIcon} alt="" src="../uilsearch1.svg" />
    </div>
  );
};

export default NavBar;
