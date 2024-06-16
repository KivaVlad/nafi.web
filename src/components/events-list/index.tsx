import {memo} from "react";
import {filterIcon} from "../../assets/icons";
import styles from "./style.module.scss";
import type {IEvent} from "../../types/i-event";

interface IProps {
  list: IEvent[];
  renderItem: (item: IEvent) => React.ReactNode;
}

const EventsList: React.FC<IProps> = ({list, renderItem}) => {  
  return (
    <div className={styles.wrapper}>

      <div className={styles.header}>
        <h2 className={styles.title}>Список моих событий</h2>
        <button className={styles.filter_btn}>
          Фильтр
          <img src={filterIcon} alt=""/>
        </button>
      </div>

      {!!list.length &&
        <div className={styles.list}>
          {list?.map(item =>
            <div key={item.id}>
              {renderItem(item)}
            </div>
          )}
        </div>
      }

    </div>
  )
}

export default memo(EventsList);