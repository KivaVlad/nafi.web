import {memo, useState, useRef, useEffect} from "react";
import {arrowDownIcon} from "../../assets/icons";
import styles from "./style.module.scss";
import type {ISelect} from "../../types/i-select";

interface IProps {
  label?: string;
  error?: string;
  value: string;
  options: ISelect[];
  placeholder?: string;
  setValue: (param: string) => void;
}

const Select: React.FC<IProps> = (props) => {
  const {label, error, value, setValue, options, placeholder} = props;
  let [active, setActive] = useState<boolean>(false);
  const selectRef = useRef<any>();

  function handleClick(param: string) {
    setValue(param);
    setActive(false);
  }

  function handleClickOutside(e: MouseEvent) {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <div ref={selectRef} className={styles.select_wrapper}>
        
        <div className={!error ? styles.select : styles.error_select} onClick={() => setActive(active = !active )}>
          <span>{value ? value : placeholder}</span>
          <img className={!active ? styles.arrow_down : styles.arrow_up} src={arrowDownIcon} alt="" />
        </div>

        {!!error && <span className={styles.error_text}>{error}</span>}

        {active && 
          <div className={styles.options_container}>
            {options.map((item) => (
              <div 
                key={item.id} 
                className={styles.item}
                onClick={() => handleClick(item.value)}
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