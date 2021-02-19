import axios from 'axios';
import { API_URL } from '../config/api';

export class UsersServices {
  static fetchUsersFromAPI = (
    page: number,
    results: number,
    seed: string,
  ): Promise<any> => {
    return new Promise<any>((resolve) => {
      axios
        .get(`${API_URL}?page=${page}&results=${results}&seed=${seed}`)
        .then((res) => {
          const users = res.data.results;
          resolve(users);
        })
        .catch((error) => console.log(error));
    });
  };
}
