import {memo} from "react";
import {formatDate} from "../../utils/date-format";
import styles from "./style.module.scss";
import type {IEventCard} from "../../types/i-event-card";

interface IProps {
  item: IEventCard;
}

const EventCard: React.FC<IProps> = ({item}) => {
  return (
    <div className={styles.card}>

    </div>
  )
}

export default memo(EventCard);