import {memo} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {removeEvent, onRemoveEvent} from "../../store/reducers/events";
import {formatDate, formatTime} from "../../utils/date-format";
import styles from "./style.module.scss";
import {editIcon, playIcon, copyIcon, trashIcon} from "../../assets/icons";
import type {IEvent} from "../../types/i-event";

interface IProps {
  item: IEvent;
}

const EventCard: React.FC<IProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const day = formatDate(item.start_date);
  const time = formatTime(item.start_date);

  const callbacks = {
    onRemove: () => {
      dispatch(removeEvent(item.id));
      dispatch(onRemoveEvent(item.id));
    },
  }
  
  return (
    <div className={styles.card}>
      <Link to={`/events/edit/${item.id}`} className={styles.edit}>
        <img src={editIcon} alt=""/>
      </Link>

      <div className={styles.date}>
        <p>{day}</p>
        <p>{time}</p>
      </div>
      <div className={styles.title}>
        {item.title}
      </div>

      <div className={styles.buttons}>
        <button type='button'>
          <img src={playIcon} alt=""/>
        </button>
        <button type='button'>
          <img src={copyIcon} alt=""/>
        </button>
        <button type='button' onClick={callbacks.onRemove}>
          <img src={trashIcon} alt=""/>
        </button>
      </div>
    </div>
  )
}

export default memo(EventCard);