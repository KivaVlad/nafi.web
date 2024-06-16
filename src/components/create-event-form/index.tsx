import {memo, useState, useEffect} from "react";
import {formatDate} from "../../utils/date-format";
import Input from "../input";
import Select from "../select";
import Button from "../button";
import SaveSvg from "../svg-icons/save";
import ShareSvg from "../svg-icons/share";
import DownloadIcon from "../svg-icons/download";
import CopySvg from "../svg-icons/copy";
import {removeIcon, editIcon, checkIcon, xIcon} from "../../assets/icons";
import {eventsTypeOptions, numberParticipants} from "../../store/mock";
import styles from "./style.module.scss";

interface IProps {
  eventName: string;
  eventType: string;
  eventDate: string;
  participants: string;
  tag: string;
  setEventName: (param: string) => void;
  setEventType: (param: string) => void;
  setEventDate: (param: string) => void;
  setParticipants: (param: string) => void;
  setTag: (param: string) => void;
  onClick: () => void;
}

const CreateEventForm: React.FC<IProps> = (props) => {
  const {
    eventName, eventType, eventDate, participants, tag,
    setEventName, setEventType, setEventDate, setParticipants, setTag, onClick,
  } = props;

  const [errorEventName, setErrorEventName] = useState<string>('');
  const [errorEventType, setErrorEventType] = useState<string>('');
  const [errorEventDate, setErrorEventDate] = useState<string>('');
  const [errorParticipants, setErrorParticipants] = useState<string>('');
  const [errorTag, setErrorTag] = useState<string>('');

  const callbacks = {
    onNavigate: () => {
      validate();

      if (validate()) {
        onClick();
      }
    },
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    validate();

    if (validate()) {
      onClick();
    }
  }

  function validate(): boolean {
    let isValid = false;
    let isValidEventName = false;
    let isValidEventType = false;
    let isValidEventDate = false;
    let isValidParticipants = false;
    let isValidTag = false;

    if (!eventName.trim()) {
      setErrorEventName('Обязательное поле');
      isValidEventName = false;
    } else {
      setErrorEventName('');
      isValidEventName = true;
    }

    if (!eventType.trim()) {
      setErrorEventType('Обязательное поле');
      isValidEventType = false;
    } else {
      setErrorEventType('');
      isValidEventType = true;
    }

    if (eventDate <= new Date().toISOString()) {
      setErrorEventDate('Введите корректные данные');
      isValidEventDate = false;
    } else {
      setErrorEventDate('');
      isValidEventDate = true;
    }

    if (!participants.length) {
      setErrorParticipants('Обязательное поле');
      isValidParticipants = false;
    } else {
      setErrorParticipants('');
      isValidParticipants = true;
    }

    if (!tag.trim()) {
      setErrorTag('Обязательное поле');
      isValidTag = false;
    } else {
      setErrorTag('');
      isValidTag = true;
    }

    if (isValidEventDate && isValidEventName && isValidEventType && isValidParticipants && isValidTag) {
      isValid = true;
    }
    return isValid;
  }

  useEffect(() => {
    if (eventName.trim()) setErrorEventName('');
    if (eventType.trim()) setErrorEventType('');
    if (eventDate.length) setErrorEventDate('');
    if (participants.trim()) setErrorParticipants('');
    if (tag.trim()) setErrorTag('');
  }, [eventName, eventType, eventDate, participants, tag])

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
          <Input label="Название события*" type="text" error={errorEventName} placeholder="Введите название события" value={eventName} onChange={setEventName}/>

          <div className={styles.select_container}>
            <label>Тип события</label>
            <p>Выберите тип события, тогда наша система подберет Вам шаблоны по соответствующей тематике.</p>
            <Select placeholder="Выберите" error={errorEventType} value={eventType} setValue={setEventType} options={eventsTypeOptions} />
          </div>

          <Input label="Дата и время начала" type="datetime-local" error={errorEventDate} value={eventDate} onChange={setEventDate}/>

          <div className={styles.select_container}>
            <label>Число участников*</label>
            <p>Укажите максимальное число предполагаемых участников. Именно такое количество ответов будет приниматься из аудитории в ходе голосования. Нужно больше? Измените тарифный план</p>
            <Select placeholder="Выберите" error={errorParticipants} value={participants} setValue={setParticipants} options={numberParticipants} />
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
          <Input placeholder="#тэг" type="text" error={errorTag} value={tag} onChange={setTag}/>
          <div className={styles.tag_params}>
            <img src={checkIcon} alt=""/>
            <p>Тег свободен</p>
          </div>
          <div className={styles.tag_params}>
            <img src={xIcon} alt=""/>
            <p>Не более 6 символов</p>
          </div>
          <div className={styles.tag_params}>
            <img src={xIcon} alt=""/>
            <p>Тег должен быть на латинице</p>
          </div>
        </div>

        <div className={styles.buttons_container}>
          <p>Сообщите аудитории #тег (или код) вашего события или продемонстрируйте QR-код</p>
          <div className={styles.buttons_three}>
            <button type='button'>
              <CopySvg/> #тег
            </button>
            <button type='button'>
              <DownloadIcon/> QR-код
            </button>
            <button type='button'>
              <ShareSvg/> Ссылка
            </button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default memo(CreateEventForm);