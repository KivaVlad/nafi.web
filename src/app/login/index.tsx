import {memo, useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import LoginLayout from "../../components/login-layout";
import LoginForm from "../../components/login-form";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const callbacks = {
    onLogin: useCallback(() => {
      console.log({login, password});
      navigate('/');
    }, [login, password])
  }

  return (
    <LoginLayout>
      <LoginForm  login={login} password={password} 
                  setLogin={setLogin} setPassword={setPassword} 
                  onSubmit={callbacks.onLogin} />
    </LoginLayout>
  )
}

export default memo(Login);