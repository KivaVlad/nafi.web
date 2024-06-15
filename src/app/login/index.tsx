import {memo, useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {completedSignIn} from "../../store/reducers/session";
import {IAuth} from "../../types/i-auth";
import {API_BASE_URL} from "../../config";
import {ROUTES} from "../../config";
import LoginLayout from "../../components/login-layout";
import LoginAnimation from "../../components/login-animation";
import LoginForm from "../../components/login-form";


const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(false);

  async function signIn(data: IAuth) {
    const response = await fetch(`${API_BASE_URL}/auth/jwt/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    
    if (response.ok) {
      dispatch(completedSignIn(json));
      navigate(ROUTES.PROFILE);
      setError(false);
    } else {
      setError(true);
    }
  }

  const callbacks = {
    onLogin: useCallback(() => signIn({email, password}), [email, password])
  }

  return (
    <LoginLayout>
      <LoginAnimation/>
      <LoginForm  email={email} password={password} errors={error}
                  setEmail={setEmail} setPassword={setPassword} onSubmit={callbacks.onLogin} />
    </LoginLayout>
  )
}

export default memo(Login);