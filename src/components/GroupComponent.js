import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <div className={styles.comfortHandyCraft}>St. Mary’s Hostel - Single</div>
      <div className={styles.div}>UGX 350,000</div>
      <div className={styles.div1}>$65.00</div>
      <img className={styles.lineIcon} alt="" src="../line-2.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.groupDiv1}>
          <img className={styles.vectorIcon} alt="" src="../vector-1.svg" />
          <div className={styles.saleDiv}>Sale</div>
        </div>
        <img
          className={styles.uilheartAltIcon}
          alt=""
          src="../uilheartalt1.svg"
        />
        <img
          className={styles.uilsearchPlusIcon}
          alt=""
          src="../uilsearchplus1.svg"
        />
        <img className={styles.groupIcon} alt="" src="../group-282.svg" />
        <img
          className={styles.image1168Icon}
          alt=""
          src="../image-11686@2x.png"
        />
      </div>
      <img className={styles.image15Icon} alt="" src="../image-15@2x.png" />
      <img className={styles.image1166Icon} alt="" src="../image-1166@2x.png" />
      <img className={styles.image9Icon} alt="" src="../image-9@2x.png" />
      <img className={styles.image23Icon} alt="" src="../image-231@2x.png" />
      <img className={styles.image32Icon} alt="" src="../image-325@2x.png" />
      <img className={styles.image3Icon} alt="" src="../image-34@2x.png" />
    </div>
  );
};

export default GroupComponent;
