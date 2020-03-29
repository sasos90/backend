import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialCreate1585453637861 implements MigrationInterface {
  name = 'InitialCreate1585453637861';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "email" character varying(500) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }
}
