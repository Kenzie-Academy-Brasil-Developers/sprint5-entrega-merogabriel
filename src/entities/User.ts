import { compare } from 'bcrypt'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid?: string

  @Column({ length: 20 })
  name: string

  @Column()
  email: string

  @Column()
  age: number

  @Column()
  password: string

  @Column()
  created_at: string

  @Column()
  updated_at: string

  comparePwd = async (receivedPwd: string): Promise<boolean> => {
    return await compare(receivedPwd, this.password)
  }
}
