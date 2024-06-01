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