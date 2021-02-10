import axios from 'axios'

export const searchUsers = (page: number, result: number): Promise<any> => {
  const promise = new Promise<any>((resolve) => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=${result}`)
      .then((res) => {
        const users = res.data.results
        resolve(users)
      })
      .catch((error) => console.log(error))
  })
  return promise
}
export const searchUsers1 = (page: number, result: number) => fetch(`https://randomuser.me/api/?page=${page}&results=${result}`);
