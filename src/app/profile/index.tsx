import {memo, useCallback, useState, useEffect, useLayoutEffect} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {remind} from "../../store/reducers/session";
import {loadUser, changeUserData} from "../../store/reducers/user";
import {formatPhoneNumber, formattedPhone} from "../../utils/phone-format";
import PageLayout from "../../components/page-layout";
import ProfileForm from "../../components/profile-form";
import VisitCard from "../../components/profile-visitcard";
import Button from "../../components/button";
import {saveIcon} from "../../assets/icons";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.user);
  
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [middlename, setMiddlename] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [entity, setEntity] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [business, setBusiness] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const [errorName, setErrorName] = useState<string>('');
  const [errorLastname, setErrorLastname] = useState<string>('');
  const [errorBusiness, setErrorBusiness] = useState<string>('');
  const [errorEntity, setErrorEntity] = useState<string>('');

  // Проверка тестовым запросом на валидность токена
  useEffect(() => {
    remind()
    .then(() => dispatch(loadUser()))
  }, [])

  // Обновление внутреннего стейта, если передан объект пользовалеля
  useLayoutEffect(() => {
    if (data) {
      setName(data.name);
      setLastname(data.lastname);
      setMiddlename(data.middlename);
      setEmail(data.email);
      setEntity(data.entity);
      setOrganization(data.organization);
      setBusiness(data.business_area);
      setPhone(formatPhoneNumber(data.phone));
    }
  }, [data])

  // Валидация полей
  function validate(): boolean {
    let isCurrent = false;
    let isCurrentName = false;
    let isCurrentLastname = false;
    let isCurrentBussiness = false;
    let isCurrentEntity = false;

    if (!name.trim()) {
      setErrorName('Обязательное поле');
      isCurrentName = false;
    } else {
      setErrorName('');
      isCurrentName = true;
    }

    if (!lastname.trim()) {
      setErrorLastname('Обязательное поле');
      isCurrentLastname = false;
    } else {
      setErrorLastname('');
      isCurrentLastname = true;
    }
    
    if (!business.trim()) {
      setErrorBusiness('Обязательное поле');
      isCurrentBussiness = false;
    } else {
      setErrorBusiness('');
      isCurrentBussiness = true;
    }
    
    if (!entity.trim()) {
      setErrorEntity('Обязательное поле');
      isCurrentEntity = false;
    } else {
      setErrorEntity('');
      isCurrentEntity = true;
    }
    
    if (isCurrentName && isCurrentLastname && isCurrentBussiness && isCurrentEntity) {
      isCurrent = true;
    }
    return isCurrent;
  }

  useEffect(() => {
    if (name.trim()) setErrorName('');
    if (lastname.trim()) setErrorLastname('');
    if (business.trim()) setErrorBusiness('');
    if (entity.trim()) setErrorEntity('');
  }, [name, lastname, business, entity])

  const callbacks = {
    // Функция сохранения новых данных пользователя
    onSave: useCallback(() => {
      validate();
      if (validate()) {
        dispatch(changeUserData({
          name, lastname, middlename, 
          email, entity, organization, 
          business_area: business,
          phone: formattedPhone(phone),
          id: data.id, 
        }))
      }
    }, [name, lastname, middlename, email, entity, organization, business, phone, data])
  }

  return (
    <PageLayout title="Ваш профиль" nav={<Button icon={saveIcon} title="Сохранить" onClick={callbacks.onSave}/>}>
      <ProfileForm  name={name} lastname={lastname} middlename={middlename} email={email} 
        entity={entity} organization={organization} business={business} phone={phone}
        errorName={errorName} errorLastname={errorLastname} errorBusiness={errorBusiness} errorEntity={errorEntity}
        setName={setName} setLastname={setLastname} setMiddlename={setMiddlename} setEmail={setEmail}
        setEntity={setEntity} setOrganization={setOrganization} setBusiness={setBusiness} setPhone={setPhone} 
      />
      <VisitCard user={data}/>
    </PageLayout>
  )
}

export default memo(Profile);