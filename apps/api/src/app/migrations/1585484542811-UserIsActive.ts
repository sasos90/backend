import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserIsActive1585484542811 implements MigrationInterface {
  name = 'UserIsActive1585484542811';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "isActive" boolean NOT NULL DEFAULT true`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "isActive"`,
      undefined
    );
  }
}
