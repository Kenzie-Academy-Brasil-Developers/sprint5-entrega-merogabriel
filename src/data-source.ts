import 'reflect-metadata'
import { DataSource } from 'typeorm'
import path from 'path'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'gmero',
  password: '1234',
  database: 'users_database',
  logging: false,
  entities: [path.join(__dirname, '/entities/**/*.{ts,js}')],
  migrations: [path.join(__dirname, '/migrations/**/*.{ts,js}')],
})
