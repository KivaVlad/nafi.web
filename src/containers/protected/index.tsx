import {memo, useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-selector';
import {useNavigate} from 'react-router-dom';
import Loader from "../../components/loader";

interface IProps {
  children: React.ReactNode;
  redirect: string;
}

const Protected: React.FC<IProps> = ({children, redirect}) => {
  const {exists, access, waiting} = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!exists && !access) {
      navigate(redirect);
    }
  }, [exists, access])

  if (!exists && waiting) {
    return (
      <Loader active={waiting}>
        {children}
      </Loader>
    )
  } else {
    return children;
  }
}

export default memo(Protected);