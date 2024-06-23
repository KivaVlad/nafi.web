import {memo, useEffect} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {remind} from "../../store/reducers/session";
import {loadUser} from "../../store/reducers/user";
import PageLayout from "../../components/page-layout";
import ProfileForm from "../../containers/profile-form";
import VisitCard from "../../components/profile-visitcard";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user);
  
  useEffect(() => {
    remind()
    .then(() => dispatch(loadUser()))
  }, [])

  return (
    <PageLayout>
      <ProfileForm data={data}/>
      <VisitCard user={data}/>
    </PageLayout>
  )
}

export default memo(Profile);