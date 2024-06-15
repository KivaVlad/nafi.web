import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (param: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const {label, type, placeholder, value, onChange} = props;

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default memo(Input);