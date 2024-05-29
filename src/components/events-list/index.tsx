import {ReactNode, memo} from "react";
import styles from "./style.module.scss";
import type {IEventCard} from "../../types/i-event-card";

interface IProps {
  list: IEventCard[];
  renderItem: (param: any) => ReactNode;
}

const EventsList: React.FC<IProps> = ({list, renderItem}) => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.create_event_container}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 16V4" stroke="#5557F2" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M4 10H16" stroke="#5557F2" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Создать событие
      </div>

      <h2 className={styles.title}>Список моих событий</h2>
      <div className={styles.list}>
        {list.map(item =>
          <div key={item.id}>
            {renderItem(item)}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(EventsList);