import {memo, useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {removeEvent, onRemoveEvent} from "../../store/reducers/events";
import {formatDate} from "../../utils/date-format";
import {ROUTES} from "../../config";
import Input from "../../components/input";
import Select from "../../components/select";
import Button from "../../components/button";
import SaveSvg from "../../components/svg-icons/save";
import ShareSvg from "../../components/svg-icons/share";
import DownloadIcon from "../../components/svg-icons/download";
import CopySvg from "../../components/svg-icons/copy";
import UploadSvg from "../../components/svg-icons/upload";
import {removeIcon, editIcon, checkIcon, xIcon} from "../../assets/icons";
import {eventsTypeOptions, numberParticipants} from "../../store/mock";
import styles from "./style.module.scss";
import {IEvent} from "../../types/i-event";

interface IProps {
  event: IEvent;
}

const EditEventForm: React.FC<IProps> = ({event}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {data} = useAppSelector(state => state.user);
  const fileRef = useRef<HTMLInputElement | any>();

  const [eventName, setEventName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString());
  const [participants, setParticipants] = useState<string>('');
  const [pdf, setPdf] = useState<File | null>();
  const [tag, setTag] = useState<string>('');

  const [errorEventName, setErrorEventName] = useState<string>('');
  const [errorEventType, setErrorEventType] = useState<string>('');
  const [errorEventDate, setErrorEventDate] = useState<string>('');
  const [errorParticipants, setErrorParticipants] = useState<string>('');
  const [errorPdf, setErrorPdf] = useState<string>('');
  const [errorTag, setErrorTag] = useState<string>('');

  useEffect(() => {
    if (event.id) {
      setEventName(event.title);
    }
  }, [event])

  const callbacks = {
    // Редактирование события
    onEdit: () => {
      if (validate()) {
        const formData = new FormData();
        if (pdf) {
          formData.append("pdf", pdf);
          console.log({ title: eventName, start_date: eventDate, user: data.id });
        }
      }
    },
    // Удаление события
    onRemove: () => {
      dispatch(removeEvent(event.id));
      dispatch(onRemoveEvent(event.id));
      navigate(ROUTES.EVENTS);
    }
  }

  function onNavigate() {
    validate();
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    validate();
    callbacks.onEdit();
  }

  function validate(): boolean {
    let isValid = false;
    let isValidEventName = false;
    let isValidEventType = false;
    let isValidEventDate = false;
    let isValidPdf = false;
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

    if (!pdf) {
      setErrorPdf('Добавьте pdf файл');
      isValidPdf = false;
    } else {
      setErrorPdf('');
      isValidPdf = true;
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

    if (isValidEventDate && isValidEventName && isValidEventType && isValidParticipants && isValidTag && isValidPdf) {
      isValid = true;
    }
    return isValid;
  }

  useEffect(() => {
    if (eventName.trim()) setErrorEventName('');
    if (eventType.trim()) setErrorEventType('');
    if (eventDate.length) setErrorEventDate('');
    if (participants.trim()) setErrorParticipants('');
    if (pdf) setErrorPdf('');
    if (tag.trim()) setErrorTag('');
  }, [eventName, eventType, eventDate, participants, pdf, tag])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.left}>
        <div className={styles.left_head}>
          <h4>{formatDate(eventDate)}</h4>
          <button type='button' onClick={callbacks.onRemove}>
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
          <Button type="button" icon={editIcon} title="К редактору" onClick={onNavigate}/>
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

        <div className={styles.down_buttons_container}>
          <div className={styles.down_buttons__left}>
            <p>Загрузите презентацию</p>
            <button 
              type='button' 
              onClick={() => fileRef.current.click()}
              className={!errorPdf ? styles.file_btn : styles.error_file_btn}
            >
              <DownloadIcon/> Загрузить PDF
            </button>
            <input type='file' 
              ref={fileRef}
              onChange={(e) => setPdf(e.target.files?.[0])}
              className={styles.hidden}
              accept=".pdf"
            />
          </div>
          <div className={styles.down_buttons__right}>
            <p>Выгрузите отчет по событию </p>
            <button type='button' className={styles.btn}>
              <UploadSvg/> Выгрузить
            </button>
          </div>
        </div>

      </div>

    </form>
  )
}

export default memo(EditEventForm);