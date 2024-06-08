import {memo, useEffect, useState} from "react";
import styles from "./styles.module.scss";

interface IProps {
  login: string;
  password: string;
  errors: string | null;
  setLogin: (param: string) => void;
  setPassword: (param: string) => void;
  onSubmit: () => void;
}

const LoginForm: React.FC<IProps> = (props) => {
  const {login, password, errors, setLogin, setPassword, onSubmit} = props;
  const [active, setActive] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (login.trim() && password.trim()) {
      setActive(true);
      onSubmit();
      setLogin('');
      setPassword('');
    }
  }

  useEffect(() => {
    if (login.trim() && password.trim()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [login, password])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Вход</h2>

      <div className={styles.inputs_wrapper}>
        <input type="text"
          className={!errors ? styles.input : styles.error_input}
          placeholder="Электронная почта"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input type="password"
          className={!errors ? styles.input : styles.error_input}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors && <span className={styles.errors_message}>{errors}</span>}
        <span>Забыли пароль?</span>
      </div>

      <div className={styles.form_bottom}>
        <button 
          type='submit'
          className={active ? styles.btn_active : styles.btn_unactive}
        >
          Войти
        </button>
        <p>Нет аккаунта? <span>Регистрация</span></p>
      </div>
    </form>
  )
}

export default memo(LoginForm);