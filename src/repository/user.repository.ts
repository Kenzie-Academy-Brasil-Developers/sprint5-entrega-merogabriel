import { User } from '../entities/User'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { hash } from 'bcrypt'
import IUserRepo from '../interfaces'

class UserRepository implements IUserRepo {
  private repo: Repository<User>

  constructor() {
    this.repo = AppDataSource.getRepository(User)
  }

  save = async (user: User) => await this.repo.save(user)

  getAll = async () => await this.repo.find()

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload })
  }

  update = async (uuid: string, payload: Partial<User>) => {
    if (payload.password) {
      payload.password = await hash(payload.password, 10)
    }

    return await this.repo.update(uuid, { ...payload })
  }

  delete = async (uuid: string) => await this.repo.delete(uuid)
}

export default new UserRepository()
