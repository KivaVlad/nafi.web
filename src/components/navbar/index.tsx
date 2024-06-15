import {memo, useState} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config";
import ProfileSvg from "../svg-icons/profile";
import EventsSvg from "../svg-icons/events";
import TarifsSvg from "../svg-icons/tarifs";
import AdviceSvg from "../svg-icons/adviсe";
import SupportSvg from "../svg-icons/support";
import LogoutSvg from "../svg-icons/logout";
import styles from "./style.module.scss";
import "./style-nav.scss";

interface IProps {
  onLogout: () => void;
}

const Navbar: React.FC<IProps> = ({onLogout}) => {
  const [activeLink, setActiveLink] = useState<string>(sessionStorage.getItem('active') || '');
  const [link, setLink] = useState<string>(sessionStorage.getItem('URL') || `${ROUTES.EVENTS}`);
  sessionStorage.setItem('active', activeLink);
  sessionStorage.setItem('URL', link);

  const options = {
    onOpen: (url: string, param: string) => {
      setLink(url);
      setActiveLink(param);
    },
    onClose: () => setActiveLink('close'),
    onOut: () => {
      onLogout();
      setActiveLink('close');
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to={ROUTES.PROFILE} onClick={options.onClose} className={styles.link}>
          <ProfileSvg/>
          Профиль
        </NavLink>

        <div className={styles.link_container}>
          <NavLink to={link} onClick={() => options.onOpen(link, 'open')} className={styles.link}>
            <EventsSvg/>
            События
          </NavLink>

          <div className={activeLink === 'open' ? styles.options : styles.hidden}>
            <NavLink to={ROUTES.EVENTS} onClick={() => options.onOpen(ROUTES.EVENTS, 'open')} className={styles.link}>Сохраненные</NavLink>
            <NavLink to={ROUTES.TEMPLATES} onClick={() => options.onOpen(ROUTES.TEMPLATES, 'open')} className={styles.link}>Шаблоны</NavLink>
          </div>
        </div>

        <NavLink to={ROUTES.TARIFS} onClick={options.onClose} className={styles.link}>
          <TarifsSvg/>
          Тарифы
        </NavLink>

        <NavLink to={ROUTES.ADVICE} onClick={options.onClose} className={styles.link}>
          <AdviceSvg/>
          Советы
        </NavLink>

        <NavLink to={ROUTES.SUPPORT} onClick={options.onClose} className={styles.link}>
          <SupportSvg/>
          Техподдержка
        </NavLink>
      </div>

      <div className={styles.logout}>
        <NavLink to={ROUTES.LOGIN} onClick={options.onOut} className={styles.link}>
          <LogoutSvg/>
          Выйти
        </NavLink>
      </div>
    </div>
  )
}

export default memo(Navbar);