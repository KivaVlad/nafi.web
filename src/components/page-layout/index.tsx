import {ReactNode, memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  marginRight: string;
  children: ReactNode;
}

const PageLayout: React.FC<IProps> = ({title, children, marginRight}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={marginRight !== '' ? styles.content_125 : styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(PageLayout);