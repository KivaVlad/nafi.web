import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (param: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const {label, type, placeholder, error, value, onChange} = props;

  return (
    <div className={!error ? styles.wrapper : styles.error_wrapper}>
      <label>{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {!!error && <span className={styles.error_text}>{error}</span>}
    </div>
  )
}

export default memo(Input);