import {memo, useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {createEvent, setWaiting, onSuccessCreate, onError} from "../../store/reducers/events";
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
import {editIcon, checkIcon, xIcon} from "../../assets/icons";
import {eventsTypeOptions, numberParticipants} from "../../store/mock";
import styles from "./style.module.scss";

const CreateEventForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {data} = useAppSelector(state => state.user);
  const {waiting} = useAppSelector(state => state.events);
  const userId = String(data?.id);
  const fileRef = useRef<HTMLInputElement | any>();

  const [eventName, setEventName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString());
  const [participants, setParticipants] = useState<string>('');
  const [pdf, setPdf] = useState<File | undefined>();
  const [tag, setTag] = useState<string>('');

  const [errorEventName, setErrorEventName] = useState<string>('');
  const [errorEventType, setErrorEventType] = useState<string>('');
  const [errorEventDate, setErrorEventDate] = useState<string>('');
  const [errorParticipants, setErrorParticipants] = useState<string>('');

  // Отправка данных формы
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    validate();
    if (validate()) {
      if (pdf) {
        // Добавляем все необходимые данные в FormData
        const formData = new FormData();
        formData.append("pdf", pdf, pdf.name);
        formData.append("title", eventName);
        formData.append("start_date", eventDate);
        formData.append("current_slide", "1");
        formData.append("user", userId);
        // Устанавливаем режим ожидания
        dispatch(setWaiting());
        // Создание нового события
        createEvent(formData)
        .then((res) => {
          dispatch(onSuccessCreate(res));
          navigate(ROUTES.EVENTS);
        })
        .catch(() => dispatch(onError()))
      }
    }
  }

  // При переходе в редактор
  function onNavigate() {
    validate();
    if (validate()) {
      // Добавляем все необходимые данные в FormData
      const formData = new FormData();
      pdf && formData.append("pdf", pdf, pdf.name);
      formData.append("title", eventName);
      formData.append("start_date", eventDate);
      formData.append("current_slide", "1");
      formData.append("user", userId);
      // Устанавливаем режим ожидания
      dispatch(setWaiting());
      // Создание нового события
      createEvent(formData)
      .then((res) => {
        dispatch(onSuccessCreate(res));
        navigate(`/events/editor/${res.id}`);
      })
      .catch(() => dispatch(onError()))
    }
  }

  // Валидация полей
  function validate(): boolean {
    let isValid = false;
    let isValidEventName = false;
    let isValidEventType = false;
    let isValidEventDate = false;
    let isValidParticipants = false;

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

    if (isValidEventDate && isValidEventName && isValidEventType && isValidParticipants) {
      isValid = true;
    }
    return isValid;
  }

  useEffect(() => {
    if (eventName.trim()) setErrorEventName('');
    if (eventType.trim()) setErrorEventType('');
    if (eventDate.length) setErrorEventDate('');
    if (participants.trim()) setErrorParticipants('');
  }, [eventName, eventType, eventDate, participants])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.left}>

        <div className={styles.left_head}>
          <h4>{formatDate(eventDate)}</h4>
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
          <Button type="button" disabled={waiting} icon={editIcon} title="К редактору" onClick={onNavigate}/>
          <button 
            type='submit' 
            className={styles.btn}
            disabled={waiting}
            >
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
              onClick={() => fileRef.current?.click()}
              className={styles.file_btn}
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

export default memo(CreateEventForm);