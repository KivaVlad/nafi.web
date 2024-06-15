import {memo} from "react";
import styles from "./style.module.scss";

interface IProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (param: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const {label, placeholder, value, onChange} = props;

  // Форматирование телефонного номера +X (XXX) XXX XX XX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value.replace(/\D/g, '');
    let formattedPhoneNumber = '';

    if (currentValue.length <= 11) {
      formattedPhoneNumber = `+7 (${currentValue.slice(1, 4)}) ${currentValue.slice(4, 7)} ${currentValue.slice(7, 9)} ${currentValue.slice(9)}`;
      onChange(formattedPhoneNumber);
    }
  }

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input 
        type='tel'
        placeholder={placeholder}
        value={value}
        onChange={handlePhoneChange}
      />
    </div>
  )
}

export default memo(Input);