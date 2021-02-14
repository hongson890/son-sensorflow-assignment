import axios from 'axios';

export class UsersServices {
  static fetchUsersFromAPI = (
    page: number,
    results: number,
    seed: string,
  ): Promise<any> => {
    const promise = new Promise<any>((resolve) => {
      axios
        .get(
          `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`,
        )
        .then((res) => {
          const users = res.data.results;
          resolve(users);
        })
        .catch((error) => console.log(error));
    });
    return promise;
  };
}
