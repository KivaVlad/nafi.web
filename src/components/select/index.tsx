import {memo} from "react";
import styles from "./style.module.scss";
import type {ISelect} from "../../types/i-select";

interface IProps {
  label: string | undefined;
  options: ISelect[];
}

const Select: React.FC<IProps> = (props) => {
  const {label, options} = props;

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <select>
        {options.map((item: ISelect) => (
          <option key={item.id} value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  )
}

export default memo(Select);