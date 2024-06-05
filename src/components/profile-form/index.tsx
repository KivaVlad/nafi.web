import {memo, useState} from "react";
import Input from "../input";
import InputPhone from "../input-phone";
import Select from "../select";
import styles from "./style.module.scss";
import type {IUser} from "../../types/i-user";

interface IProps {
  user: IUser;
}

const ProfileForm: React.FC<IProps> = ({user}) => {
  const [name, setName] = useState<string>(user.username || '');
  const [lastname, setLastname] = useState<string>(user.lastname || '');
  const [surname, setSurname] = useState<string>(user.surname || '');
  const [email, setEmail] = useState<string>(user.email || '');
  const [entity, setEntity] = useState<string>(user.entity || '');
  const [organization, setOrganization] = useState<string>(user.org || '');
  const [job, setJob] = useState<string>(user.job || '');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  
  const options = [
    {id: '1', value: 'Физическое лицо', title: 'Физическое лицо'},
    {id: '2', value: 'Юридическое лицо', title: 'Юридическое лицо'},
  ];

  return (
    <div className={styles.wrapper}>

      <div className={styles.left}>
        <Input label="Фамилия" type="text" placeholder="Введите фамилию" value={lastname} onChange={setLastname}/>
        <Input label="Имя" type="text" placeholder="Введите имя" value={name} onChange={setName}/>
        <Input label="Отчество" type="text" placeholder="Введите отчество" value={surname} onChange={setSurname}/>
        <Input label="E-mail" type="text" placeholder="Введите email" value={email} onChange={setEmail}/>
      </div>

      <div className={styles.right}>
        <Select label="Физическое лицо/Юридическое лицо" options={options}/>
        <Input label="Организация" type="text" placeholder="Введите наименование организации" value={organization} onChange={setOrganization}/>
        <Select label="Ваша сфера" options={[]} />
        <InputPhone label="Телефон" type="tel" placeholder="+7 999 000-00-00" value={phoneNumber} onChange={setPhoneNumber}/>
      </div>

    </div>
  )
}

export default memo(ProfileForm);