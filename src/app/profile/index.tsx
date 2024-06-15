import {memo, useCallback, useState, useEffect} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {remind} from "../../api/remind";
import {loadUser, changeUserData} from "../../store/reducers/user";
import {formattedPhone, formatPhoneNumber} from "../../utils/phone-format";
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
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user)

  const [name, setName] = useState<string>(data.name || '');
  const [lastname, setLastname] = useState<string>(data.lastname || '');
  const [middlename, setMiddlename] = useState<string>(data.middlename || '');
  const [email, setEmail] = useState<string>(data.email);
  const [entity, setEntity] = useState<string>(data.entity || '');
  const [organization, setOrganization] = useState<string>(data.organization || '');
  const [business, setBusiness] = useState<string>(data.business_area || '');
  const [phone, setPhone] = useState<string>(formatPhoneNumber(data.phone) || '');

  /**
   * Проверка тестовым запросом на валидность токена
   * В случае успешного ответа - полчаем данные о пользователе
   */
  useEffect(() => {
    remind()
    .then(() => dispatch(loadUser()))
  }, [])

  const callbacks = {
    // Функция сохранения новых данных пользователя
    onSave: useCallback(() => {
      dispatch(changeUserData({
        id: data.id, name, lastname, middlename, email, entity, organization, business_area: business, phone: formattedPhone(phone)
      }))
    }, [name, lastname, middlename, email, entity, organization, business, phone])
  }

  return (
    <PageLayout title="Ваш профиль" nav={<Button icon={saveIcon} title="Сохранить" onClick={callbacks.onSave}/>}>
      <ProfileForm 
        left={
          <>
            <Input label="Фамилия" type="text" placeholder="Введите фамилию" value={lastname} onChange={setLastname}/>
            <Input label="Имя" type="text" placeholder="Введите имя" value={name} onChange={setName}/>
            <Input label="Отчество" type="text" placeholder="Введите отчество" value={middlename} onChange={setMiddlename}/>
            <Input label="E-mail" type="text" placeholder="Введите email" value={email} onChange={setEmail}/>
          </>}
          right={
            <>
              <Select label="Физическое лицо/Юридическое лицо" value={entity} setValue={setEntity} options={entityOptions}/>
              <Input label="Организация" type="text" placeholder="Введите наименование организации" value={organization} onChange={setOrganization}/>
              <Select label="Ваша сфера" value={business} setValue={setBusiness} options={jobOptions} />
              <InputPhone label="Телефон" placeholder="+7 999 000-00-00" value={phone} onChange={setPhone}/>
            </>}
      />
      <VisitCard user={data}/>
    </PageLayout>
  )
}

export default memo(Profile);