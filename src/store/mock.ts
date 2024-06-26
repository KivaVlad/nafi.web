import {ISelect} from "../types/i-select"

export const entityOptions: ISelect[] = [
  {id: '1', title: 'Физическое лицо', value: 'Физическое лицо'},
  {id: '2', title: 'Юридическое лицо', value: 'Юридическое лицо'},
]

export const jobOptions: ISelect[] = [
  {id: '1', title: 'Крупный или средний бизнес - Топ-менеджмент', value: 'Крупный или средний бизнес - Топ-менеджмент'},
  {id: '2', title: 'Крупный или средний бизнес - Отдел HR, корпуниверситет', value: 'Крупный или средний бизнес - Отдел HR, корпуниверситет'},
  {id: '3', title: 'Образовательная организация (школа, вуз и пр.)', value: 'Образовательная организация (школа, вуз и пр.)'},
  {id: '4', title: 'Некоммерческая я организация (НКО)', value: 'Некоммерческая я организация (НКО)'},
  {id: '5', title: 'Event-агенство', value: 'Event-агенство'},
]

export const eventsTypeOptions: ISelect[] = [
  {id: '1', title: 'Мастер-класс', value: 'Мастер-класс'},
  {id: '2', title: 'Тренинг', value: 'Тренинг'},
  {id: '3', title: 'Семинар', value: 'Семинар'},
  {id: '4', title: 'HR', value: 'HR'},
]

export const numberParticipants: ISelect[] = [
  {id: '1', title: 'До 30 слушателей', value: 'До 30 слушателей'},
  {id: '2', title: 'До 100 слушателей', value: 'До 100 слушателей'},
  {id: '3', title: 'До 1000 слушателей', value: 'До 1000 слушателей'},
]