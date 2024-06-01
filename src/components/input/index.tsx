import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  label: string | undefined;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string | undefined;
  // value: string | undefined;
  // onChange: (param: string) => void | undefined;
}

const Input: React.FC<IProps> = (props) => {
  const {label, type, placeholder} = props;

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        // value={value}
        // onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default memo(Input);