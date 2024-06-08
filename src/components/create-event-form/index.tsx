import {memo, useState, useCallback} from "react";
import {formatDate} from "../../utils/date-format";
import Input from "../input";
import Select from "../select";
import Button from "../button";
import SaveSvg from "../svg-icons/save";
import {removeIcon, editIcon} from "../../assets/icons";
import styles from "./style.module.scss";
import {eventsTypeOptions, numberParticipants} from "../../store/mock";

const CreateEventForm: React.FC = () => {
  const [eventName, setEventName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString());
  const [participants, setParticipants] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const callbacks = {
    onNavigate: useCallback(() => console.log('nav'), []),
    onSave: useCallback(() => {
      console.log({eventName, eventType, eventDate, participants});
    }, [eventName, eventType, eventDate, participants]),
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.left}>
        <div className={styles.left_head}>
          <h4>{formatDate(eventDate)}</h4>
          <button type='button'>
            Удалить событие 
            <img src={removeIcon} alt=""/>
          </button>
        </div>
        <div className={styles.left_main}>
          <Input label="Название события*" type="text" placeholder="Введите название события" value={eventName} onChange={setEventName}/>

          <div className={styles.select_container}>
            <label>Тип события</label>
            <p>Выберите тип события, тогда наша система подберет Вам шаблоны по соответствующей тематике.</p>
            <Select placeholder="Выберите" value={eventType} setValue={setEventType} options={eventsTypeOptions} />
          </div>

          <Input label="Дата и время начала" type="datetime-local" value={eventDate} onChange={setEventDate}/>

          <div className={styles.select_container}>
            <label>Число участников*</label>
            <p>Укажите максимальное число предполагаемых участников. Именно такое количество ответов будет приниматься из аудитории в ходе голосования. Нужно больше? Измените тарифный план</p>
            <Select placeholder="Выберите" value={participants} setValue={setParticipants} options={numberParticipants} />
          </div>
        </div>
        <div className={styles.left_buttons_wrapper}>
          <Button type="button" icon={editIcon} title="К редактору" onClick={callbacks.onNavigate}/>
          <button type='submit' className={styles.btn}>
            <SaveSvg/>
            Сохранить
          </button>
        </div>
      </div>


      <div className={styles.right}>
        <div className={styles.select_container}>
          <label>Придумайте тег для события*</label>
          <p>Этот тег необходимо будет показать участникам, чтобы они могли присоедениться к событию</p>
          <Input placeholder="#тэг" type="text" value={tag} onChange={setTag}/>
        </div>
      </div>

    </form>
  )
}

export default memo(CreateEventForm);