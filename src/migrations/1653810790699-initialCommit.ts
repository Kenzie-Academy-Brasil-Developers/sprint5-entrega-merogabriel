import { MigrationInterface, QueryRunner } from 'typeorm'

export class initialCommit1653810790699 implements MigrationInterface {
  name = 'initialCommit1653810790699'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "email" character varying NOT NULL, "age" integer NOT NULL, "password" character varying NOT NULL, "created_at" character varying NOT NULL, "updated_at" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`)
  }
}
