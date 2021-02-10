import axios from 'axios'

export const searchUsers = (): Promise<Array<any>> => {
  const promise = new Promise<Array<any>>((resolve) => {
    axios
      .get(`https://randomuser.me/api/?page=3&results=10`)
      .then((res) => {
        const users = res.data.results
        resolve(users)
      })
      .catch((error) => console.log(error))
  })
  return promise
}
