import {API_BASE_URL} from "../config";
import {ISession} from "../types/i-session";

/**
 * Функция восстановления сессии с помощью refresh токена
 */
async function remind() {
  const access = localStorage.getItem('access_token');
  if (access) {
    // Делаем запрос для получения данных пользователя
    const response = await fetch(`${API_BASE_URL}/auth/users/me/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    })
    
    if (!response.ok) {
      // Удаляем плохой токен
      localStorage.removeItem('access_token');
      // Делаем запрос на получение нового токена
      const refresh = localStorage.getItem('refresh_token');
      if (refresh) {
        const res = await fetch(`${API_BASE_URL}/auth/jwt/refresh/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({refresh})
        })
        const data = await res.json() as ISession;
        
        if (res.ok) {
          // Сохраняем новые токены
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
        }
      }
    }
  
  }
}

export {remind};