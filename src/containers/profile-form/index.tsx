import {memo, useEffect, useState, useCallback} from "react";
import {useAppDispatch} from "../../hooks/use-dispatch";
import {changeUserData} from "../../store/reducers/user";
import {entityOptions, jobOptions} from "../../store/mock";
import {formatPhoneNumber, formattedPhone} from "../../utils/phone-format";
import {IUser} from "../../types/i-user";
import PageHead from "../../components/page-head";
import Button from "../../components/button";
import Input from "../../components/input";
import InputPhone from "../../components/input-phone";
import Select from "../../components/select";
import {saveIcon} from "../../assets/icons";
import styles from "./style.module.scss";

interface IProps {
  data: IUser;
}

const ProfileForm: React.FC<IProps> = ({data}) => {
  const dispatch = useAppDispatch();

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

  // Обновление внутреннего стейта, если передан объект пользовалеля
  useEffect(() => {
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

  return (
    <>
      <PageHead title="Ваш профиль" nav={<Button icon={saveIcon} title="Сохранить" onClick={callbacks.onSave}/>}/>
      
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Input label="Фамилия" type="text" placeholder="Введите фамилию" error={errorLastname} value={lastname} onChange={setLastname}/>
          <Input label="Имя" type="text" placeholder="Введите имя" error={errorName} value={name} onChange={setName}/>
          <Input label="Отчество" type="text" placeholder="Введите отчество" value={middlename} onChange={setMiddlename}/>
          <Input label="E-mail" type="text" placeholder="Введите email" value={email} onChange={setEmail}/>
        </div>
        <div className={styles.right}>
          <Select label="Физическое лицо/Юридическое лицо" error={errorEntity} value={entity} setValue={setEntity} options={entityOptions}/>
          <Input label="Организация" type="text" placeholder="Введите наименование организации" value={organization} onChange={setOrganization}/>
          <Select label="Ваша сфера" error={errorBusiness} value={business} setValue={setBusiness} options={jobOptions} />
          <InputPhone label="Телефон" placeholder="+7 999 000-00-00" value={phone} onChange={setPhone}/>
        </div>
      </div>
    </>
  )
}

export default memo(ProfileForm);