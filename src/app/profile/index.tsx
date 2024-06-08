import {memo, useCallback, useState} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {formatPhoneNumber} from "../../utils/phone-format";
import PageLayout from "../../components/page-layout";
import ProfileForm from "../../components/profile-form";
import Input from "../../components/input";
import InputPhone from "../../components/input-phone";
import Select from "../../components/select";
import VisitCard from "../../components/profile-visitcard";
import Button from "../../components/button";
import {saveIcon} from "../../assets/icons";
import {entityOptions, jobOptions} from "../../store/mock";

const Profile: React.FC = () => {
  const {data} = useAppSelector(store => store.user);

  const [firstName, setFirstName] = useState<string>(data.username || '');
  const [lastname, setLastname] = useState<string>(data.lastname || '');
  const [surname, setSurname] = useState<string>(data.surname || '');
  const [email, setEmail] = useState<string>(data.email || '');
  const [entity, setEntity] = useState<string>(data.entity || '');
  const [organization, setOrganization] = useState<string>(data.org || '');
  const [job, setJob] = useState<string>(data.job || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(formatPhoneNumber(data.tel) || '');

  const callbacks = {
    onSave: useCallback(() => {
      console.log({firstName, lastname, surname, email, organization, phoneNumber})
    }, [firstName, lastname, surname, email, organization, phoneNumber])
  }

  return (
    <PageLayout title="Ваш профиль" nav={<Button icon={saveIcon} title="Сохранить" onClick={callbacks.onSave}/>}>
      <ProfileForm 
        left={
          <>
            <Input label="Фамилия" type="text" placeholder="Введите фамилию" value={lastname} onChange={setLastname}/>
            <Input label="Имя" type="text" placeholder="Введите имя" value={firstName} onChange={setFirstName}/>
            <Input label="Отчество" type="text" placeholder="Введите отчество" value={surname} onChange={setSurname}/>
            <Input label="E-mail" type="text" placeholder="Введите email" value={email} onChange={setEmail}/>
          </>}
          right={
            <>
              <Select label="Физическое лицо/Юридическое лицо" value={entity} setValue={setEntity} options={entityOptions}/>
              <Input label="Организация" type="text" placeholder="Введите наименование организации" value={organization} onChange={setOrganization}/>
              <Select label="Ваша сфера" value={job} setValue={setJob} options={jobOptions} />
              <InputPhone label="Телефон" placeholder="+7 999 000-00-00" value={phoneNumber} onChange={setPhoneNumber}/>
            </>}
      />
      <VisitCard user={data}/>
    </PageLayout>
  )
}

export default memo(Profile);