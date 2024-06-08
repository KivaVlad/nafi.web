import {memo, useState} from "react";
import {arrowDownIcon} from "../../assets/icons";
import styles from "./style.module.scss";
import type {ISelect} from "../../types/i-select";

interface IProps {
  label?: string;
  value: string;
  options: ISelect[];
  placeholder?: string;
  setValue: (param: string) => void;
}

const Select: React.FC<IProps> = (props) => {
  const {label, value, setValue, options, placeholder} = props;
  let [active, setActive] = useState<boolean>(false);

  function handleClick(item: string) {
    setValue(item);
    setActive(false);
  }

  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <div className={styles.select_wrapper}>
        <div className={styles.select} onClick={() => setActive(active = !active )}>
          <span>{value ? value : placeholder}</span>
          <img className={!active ? styles.arrow_down : styles.arrow_up} src={arrowDownIcon} alt="" />
        </div>
        {active && 
          <div className={styles.options_container}>
            {options.map((item) => (
              <div 
                key={item.id} 
                className={styles.item}
                onClick={() => handleClick(item.title)}
              >
                {item.title}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default memo(Select);