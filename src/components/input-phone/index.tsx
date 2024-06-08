import {memo, useState} from "react";
import styles from "./style.module.scss";

interface IProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (param: string) => void;
}

const Input: React.FC<IProps> = (props) => {
  const {label, placeholder, value, onChange} = props;
  const [phone, setPhone] = useState(value);

  // Форматирование телефонного номера +X (XXX) XXX XX XX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    let formattedPhoneNumber = '';

    if (value.length <= 11) {
      formattedPhoneNumber = `+7 (${value.slice(1, 4)}) ${value.slice(4, 7)} ${value.slice(7, 9)} ${value.slice(9)}`;
      setPhone(formattedPhoneNumber);
      onChange(phone);
    }
  }

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <input 
        type='tel'
        placeholder={placeholder}
        value={phone}
        onChange={handlePhoneChange}
      />
    </div>
  )
}

export default memo(Input);