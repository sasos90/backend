import {MigrationInterface, QueryRunner} from 'typeorm';

export class RealValues1571082892785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "photo" ADD "realViews" integer NOT NULL DEFAULT (0)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "photo" DROP COLUMN "realViews"`, undefined);
    }

}
