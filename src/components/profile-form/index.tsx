import {memo} from "react";
import Input from "../input";
import Select from "../select";
import ButtonChange from "./button-change";
import ButtonSave from "./button-save";
import styles from "./style.module.scss";

const ProfileForm: React.FC = () => {
  
  const options = [
    {id: '1', value: 'Физическое лицо', title: 'Физическое лицо'},
    {id: '2', value: 'Юридическое лицо', title: 'Юридическое лицо'},
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.left}>
        <Input label="Имя" type="text" placeholder="Введите имя"/>
        <Input label="E-mail" type="text" placeholder="Введите email"/>
        <div className={styles.password}>
          <span>Пароль</span>
          <div className={styles.buttons}>
            <ButtonChange type="button"/>
            <ButtonSave type="submit"/>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <Select label="Физическое лицо/Юридическое лицо" options={options}/>
        <Input label="Организация" type="text" placeholder="Введите наименование организации"/>
        <Select label="Ваша сфера" options={[]} />
      </div>

    </form>
  )
}

export default memo(ProfileForm);