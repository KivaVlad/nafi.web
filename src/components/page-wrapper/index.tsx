import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
}

/**
 * Обертка для отдельных страниц, где на больших расширениях отступ справа должен быть равен 125px
 * @returns 
 */
const PageWrapper: React.FC<IProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default memo(PageWrapper);