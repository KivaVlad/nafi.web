import {memo} from "react";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config";
import ProfileSvg from "../svg-icons/profile";
import EventsSvg from "../svg-icons/events";
import TarifsSvg from "../svg-icons/tarifs";
import AdviceSvg from "../svg-icons/adviсe";
import SupportSvg from "../svg-icons/support";
import LogoutSvg from "../svg-icons/logout";
import styles from "./style.module.scss";
import "../navbar/style-nav.scss";

interface IProps {
  onLogout: () => void;
}

const SmallNavbar: React.FC<IProps> = ({onLogout}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to={ROUTES.PROFILE} className={styles.link}>
          <ProfileSvg/>
        </NavLink>

        <NavLink to={ROUTES.EVENTS} className={styles.link}>
          <EventsSvg/>
        </NavLink>

        <NavLink to={ROUTES.TARIFS} className={styles.link}>
          <TarifsSvg/>
        </NavLink>

        <NavLink to={ROUTES.ADVICE} className={styles.link}>
          <AdviceSvg/>
        </NavLink>

        <NavLink to={ROUTES.SUPPORT} className={styles.link}>
          <SupportSvg/>
        </NavLink>
      </div>

      <div className={styles.logout}>
        <NavLink to={ROUTES.LOGIN} onClick={onLogout} className={styles.link}>
          <LogoutSvg/>
        </NavLink>
      </div>
    </div>
  )
}

export default memo(SmallNavbar);