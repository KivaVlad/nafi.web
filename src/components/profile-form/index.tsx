import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  left: React.ReactNode;
  right: React.ReactNode
}

const ProfileForm: React.FC<IProps> = ({left, right}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {left}
      </div>
      <div className={styles.right}>
        {right}
      </div>
    </div>
  )
}

export default memo(ProfileForm);