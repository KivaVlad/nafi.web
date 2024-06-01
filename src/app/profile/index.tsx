import {memo} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import ProfileForm from "../../components/profile-form";
import VisitCard from "../../components/profile-visitcard";

const Profile: React.FC = () => {
  const {user} = useAppSelector(store => store.user);

  return (
    <PageLayout title="Ваш профиль" marginRight="125">
      <ProfileForm/>
      <VisitCard user={user}/>
    </PageLayout>
  )
}

export default memo(Profile);