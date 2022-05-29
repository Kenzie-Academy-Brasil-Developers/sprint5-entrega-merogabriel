import { User } from '../entities/User'

const userWOPassword = (user: User): Partial<User> => {
  const { password, ...userWOPwd } = user
  return userWOPwd
}

const getDate = () => {
  const today = new Date()

  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

  return date + ' ' + time
}

export { userWOPassword, getDate }
