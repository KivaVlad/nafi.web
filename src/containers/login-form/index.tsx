import {memo, useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL, ROUTES} from "../../config";
import {setSession} from "../../store/reducers/session";
import {IAuth} from "../../types/i-auth";
import {ISession} from "../../types/i-session";
import styles from "./styles.module.scss";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  async function signIn(data: IAuth) {
    const response = await fetch(`${API_BASE_URL}/auth/jwt/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const json = await response.json() as ISession;
    
    if (response.ok) {
      dispatch(setSession(json));
      navigate(ROUTES.PROFILE);
      setError('');
    } else {
      setError('Неверный логин или пароль');
    }
  }

  // Отправка данных формы
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (email.trim() && password.trim()) {
      setActive(true);
      signIn({email, password});
      setEmail('');
      setPassword('');
    }
  }

  // Обработка ошибки для пустых строк
  useEffect(() => {
    if (email.trim() && password.trim()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [email, password])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Вход</h2>

      <div className={styles.inputs_wrapper}>
        <input type="text"
          className={!error ? styles.input : styles.error_input}
          placeholder="Электронная почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          className={!error ? styles.input : styles.error_input}
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span className={styles.errors_message}>{error}</span>}
        <span>Забыли пароль?</span>
      </div>

      <div className={styles.form_bottom}>
        <button type='submit' className={active ? styles.btn_active : styles.btn_unactive}>
          Войти
        </button>
        <p>Нет аккаунта? <span>Регистрация</span></p>
      </div>
    </form>
  )
}

export default memo(LoginForm);