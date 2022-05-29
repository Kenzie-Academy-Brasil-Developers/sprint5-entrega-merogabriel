import { hash } from 'bcrypt'
import { userWOPassword, getDate } from '../utils'
import { Request } from 'express'
import { userRepository } from '../repository'
import { User } from '../entities/User'

class userService {
  insertUserService = async ({ body }: Request): Promise<Partial<User>> => {
    body.password = await hash(body.password, 10)
    body.created_at = getDate()
    body.updated_at = getDate()

    const user = await userRepository.save({ ...body })

    return userWOPassword(user)
  }

  getAllUsersService = async (): Promise<Partial<User>[]> => {
    const users = await (
      await userRepository.getAll()
    ).map((u: User) => userWOPassword(u))

    return users
  }

  updateUserService = async ({
    user,
    body,
  }: Request): Promise<Partial<User>> => {
    body.updated_at = getDate()
    await userRepository.update(user.uuid, { ...body })
    return userWOPassword({ ...user, ...body })
  }

  deleteUserService = async ({ user }: Request): Promise<Partial<User>> => {
    await userRepository.delete(user.uuid)

    return userWOPassword(user)
  }
}

export default new userService()
