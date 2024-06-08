/**
 * Форматирование телефонного номера +X (XXX) XXX XX XX
 * @param phone 
 * @returns 
 */
export function formatPhoneNumber(phone: string) {
  phone = phone.slice(1);
  const formattedNumber = `+${phone.slice(0, 1)} (${phone.slice(1, 4)}) ${phone.slice(4, 7)} ${phone.slice(7, 9)} ${phone.slice(9)}`;
  return formattedNumber;
}