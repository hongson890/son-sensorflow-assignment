// eslint-disable-next-line import/no-extraneous-dependencies
import { cloneDeep } from 'lodash'

export function sortUserList(
  users: any[],
  orderBy: string,
  orderDirection: string
) {
  console.log('start sortUserList')
  console.log(users)
  const myClonedArray = cloneDeep(users)
  if (!orderBy || !orderDirection) {
    return myClonedArray
  }
  const e =
    orderDirection === 'asc'
      ? myClonedArray.sort(dynamicSort(orderBy))
      : myClonedArray.sort(dynamicSort(`-${orderBy}`))
  console.log('end sortUserList')
  console.log(e)
  return e
}

function dynamicSort(property: string) {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function (a: any, b: any) {
    if (property === 'fullName') {
      // eslint-disable-next-line no-nested-ternary
      let result = 0
      if (getFullName(a) < getFullName(b)) {
        result = -1
      }
      if (getFullName(a) > getFullName(b)) {
        result = 1
      }
      return result * sortOrder
    }

    if (property === 'username') {
      let result = 0
      if (a.login.username < b.login.username) {
        result = -1
      }
      if (a.login.username > b.login.username) {
        result = 1
      }
      return result * sortOrder
    }

    return 1
  }
}

export function getFullName(user: any): string {
  const i = `${user.name.title} ${user.name.first} ${user.name.last}`
  return i
}