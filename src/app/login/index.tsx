import {memo} from "react";
import LoginLayout from "../../components/login-layout";
import LoginAnimation from "../../components/login-animation";
import LoginForm from "../../containers/login-form";


const Login: React.FC = () => {
  return (
    <LoginLayout>
      <LoginAnimation/>
      <LoginForm/>
    </LoginLayout>
  )
}

export default memo(Login);