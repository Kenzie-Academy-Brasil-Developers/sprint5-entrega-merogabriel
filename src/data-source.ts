import 'reflect-metadata'
import { DataSource } from 'typeorm'
import path from 'path'
import * as dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'users_database',
  logging: false,
  entities: [path.join(__dirname, '/entities/**/*.{ts,js}')],
  migrations: [path.join(__dirname, '/migrations/**/*.{ts,js}')],
})
