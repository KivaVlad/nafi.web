import {memo, useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-selector';
import {useNavigate} from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  redirect: string;
}

const Protected: React.FC<IProps> = ({children, redirect}) => {
  const {exists, access} = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!exists && !access) {
      navigate(redirect);
    }
  }, [exists, access])

  return children;
}

export default memo(Protected);