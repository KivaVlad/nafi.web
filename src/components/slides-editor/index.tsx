import {memo, useState, useEffect, useRef} from "react";
import {arrowBackIcon} from "../../assets/icons";
import {ISlide} from "../../types/i-slide";
import {uploadIcom, copySuccessIcon, timerIcon, notificationIcon, linksIcon, translateIcon, chartIcon, messagesIcon} from "../../assets/icons";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  slides: ISlide[];
  onNav: () => void;
  onEdit: (pdf: File) => void;
}

const SlidesEditor: React.FC<IProps> = ({title, slides, onNav, onEdit}) => {
  const [currentImg, setCurrentImg] = useState<string>('');
  const [pdf, setPdf] = useState<File | undefined>();
  const fileRef = useRef<HTMLInputElement | any>();

  useEffect(() => {
    if (slides?.length) {
      setCurrentImg(slides[0]?.jpeg);
    }
  }, [])

  useEffect(() => {
    if (pdf) {
      onEdit(pdf);
    }
  }, [pdf])

  return (
    <div className={styles.wrapper}>

      <div className={styles.head}>
        <div className={styles.title}>
          <button onClick={onNav}>
            <img src={arrowBackIcon} alt=""/>
          </button>
          <h3>{title}</h3>
        </div>
        <div className={styles.nav}>
          <button className={styles.nav_link}>Настройки</button>
          <button className={styles.nav_link}>Интерактив</button>
          <button className={styles.nav_link}>Контент</button>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.list}>
          {slides?.map((item, index) => (
            <div key={item.id} className={styles.slide_card}>
              <span>{index + 1}</span>
              <button className={currentImg === item.jpeg ? styles.active_sm_image : styles.sm_image} onClick={() => setCurrentImg(item.jpeg)}>
                <img src={item.jpeg} alt=""/>
              </button>
            </div>
          ))}
        </div>

        <div className={styles.working_zone}>
          {currentImg && 
            <div className={styles.big_image}>
              <img src={currentImg} alt=""/>
            </div>
          }
        </div>

        <div className={styles.options}>
          <div className={styles.general_setting}>
            <h3>Общие настройки события</h3>
            <p>Подключите нужные функции</p>

            <div className={styles.option_buttons}>
              <button onClick={() => fileRef.current?.click()}>
                <img src={uploadIcom} alt=""/>
                Загрузить PDF
              </button>
              <input 
                ref={fileRef}
                type='file'
                className={styles.hidden}
                accept=".pdf"
                onChange={(e) => setPdf(e.target.files?.[0])}
              />
              <button>
                <img src={copySuccessIcon} alt=""/>
                Дублировать
              </button>
              <button>
              <img src={timerIcon} alt=""/>
                Таймер
              </button>
              <button>
                <img src={notificationIcon} alt=""/>
                Уведомление
              </button>
              <button>
                <img src={linksIcon} alt=""/>
                Ссылки
              </button>
              <button>
                <img src={translateIcon} alt=""/>
                Перевод
              </button>
              <button>
                <img src={chartIcon} alt=""/>
                Результаты
              </button>
              <button>
                <img src={messagesIcon} alt=""/>
                Чат
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default memo(SlidesEditor);