import { User } from '../entities/User'
import { UpdateResult, DeleteResult } from 'typeorm'

export default interface IUserRepo {
  save: (user: User) => Promise<User>
  getAll: () => Promise<User[]>
  retrieve: (payload: object) => Promise<User>
  update: (uuid: string, payload: Partial<User>) => Promise<UpdateResult>
  delete: (uuid: string) => Promise<DeleteResult>
}
