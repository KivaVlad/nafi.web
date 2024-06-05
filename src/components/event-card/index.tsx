import {memo} from "react";
import {formatDate, formatTime} from "../../utils/date-format";
import styles from "./style.module.scss";
import type {IEvent} from "../../types/i-event";

interface IProps {
  item: IEvent;
}

const EventCard: React.FC<IProps> = ({item}) => {
  const day = formatDate(item.date);
  const time = formatTime(item.date);
  
  return (
    <div className={styles.card}>
      <div className={styles.date}>
        <p>{day}</p>
        <p>{time}</p>
      </div>
    </div>
  )
}

export default memo(EventCard);