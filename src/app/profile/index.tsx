import {memo, useCallback} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import PageLayout from "../../components/page-layout";
import ProfileForm from "../../components/profile-form";
import VisitCard from "../../components/profile-visitcard";
import Button from "../../components/button";
import {saveIcon} from "../../assets/icons";

const Profile: React.FC = () => {
  const {data} = useAppSelector(store => store.user);

  const callbacks = {
    onSave: useCallback(() => console.log('787'),[])
  }

  return (
    <PageLayout title="Ваш профиль"
      button={<Button icon={saveIcon} title="Сохранить" onClick={callbacks.onSave}/>}>
      <ProfileForm user={data}/>
      <VisitCard user={data}/>
    </PageLayout>
  )
}

export default memo(Profile);