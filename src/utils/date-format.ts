import { format, parseISO } from 'date-fns';
import {ru} from 'date-fns/locale';

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "eeee d MMMM HH:mm", {locale: ru});
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}