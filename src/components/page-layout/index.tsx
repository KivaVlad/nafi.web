import {ReactNode, memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  margin_right: string;
  children: ReactNode;
}

const PageLayout: React.FC<IProps> = ({title, children, margin_right}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={margin_right !== '' ? styles.content_125 : styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(PageLayout);