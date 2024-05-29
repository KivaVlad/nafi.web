import {ReactNode, memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  children: ReactNode;
}

const PageLayout: React.FC<IProps> = ({title, children}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default memo(PageLayout);