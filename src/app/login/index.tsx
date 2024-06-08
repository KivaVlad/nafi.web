import {memo, useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {useAppSelector} from "../../hooks/use-selector";
import {signIn} from "../../store/reducers/session";
import LoginLayout from "../../components/login-layout";
import LoginAnimation from "../../components/login-animation";
import LoginForm from "../../components/login-form";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {errors} = useAppSelector(state => state.session);

  const callbacks = {
    onLogin: useCallback(() => {
      dispatch(signIn({login, password}));
      navigate('/');
    }, [login, password])
  }

  return (
    <LoginLayout>
      <LoginAnimation/>
      <LoginForm  login={login} password={password} errors={errors}
                  setLogin={setLogin} setPassword={setPassword} onSubmit={callbacks.onLogin} />
    </LoginLayout>
  )
}

export default memo(Login);