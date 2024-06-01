import {memo} from "react";
import {leftBlockLogo, centerUpBlockLogo, centerDownBlockLogo, rightDownBlockLogo, rightUpBlockLogo} from "../../assets/animate-logo";
import styles from "./style.module.scss";

const AnimateLogo: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_group}>
        <img src={leftBlockLogo} alt=""/>
      </div>
      <div className={styles.center_group}>
        <img className={styles.center_group_up_img} src={centerUpBlockLogo} alt=""/>
        <img className={styles.center_group_down_img} src={centerDownBlockLogo} alt=""/>
      </div>
      <div className={styles.right_group}>
        <img src={rightUpBlockLogo} alt=""/>
        <img src={rightDownBlockLogo} alt=""/>
      </div>
    </div>
  )
}

export default memo(AnimateLogo);