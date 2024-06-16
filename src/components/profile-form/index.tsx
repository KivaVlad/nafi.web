import {memo} from "react";
import {entityOptions, jobOptions} from "../../store/mock";
import Input from "../input";
import InputPhone from "../input-phone";
import Select from "../select";
import styles from "./style.module.scss";

interface IProps {
  name: string;
  lastname: string;
  middlename: string;
  email: string;
  entity: string;
  organization: string;
  business: string;
  phone: string;
  errorName: string;
  errorLastname: string;
  errorBusiness: string;
  errorEntity: string;
  setName: (param: string) => void;
  setLastname: (param: string) => void;
  setMiddlename: (param: string) => void;
  setEmail: (param: string) => void;
  setEntity: (param: string) => void;
  setOrganization: (param: string) => void;
  setBusiness: (param: string) => void;
  setPhone: (param: string) => void;
}

const ProfileForm: React.FC<IProps> = (props) => {
  const {
    name, lastname, middlename, email, entity, organization, business, phone,
    errorName, errorLastname, errorBusiness, errorEntity,
    setName, setLastname, setMiddlename, setEmail, setEntity, setOrganization, setBusiness, setPhone,
  } = props;

  return (
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
  )
}

export default memo(ProfileForm);