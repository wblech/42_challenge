import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudents1594931129723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "students",
				columns: [
					{
						name: "id",
						type: "integer",
						isGenerated: true,
						isPrimary: true,
						isUnique: true,
					},
					{
						name: "name",
						type: "varchar",
					},
					{
						name: "intra_id",
						type: "varchar",
						isUnique: true,
					},
					{
						name: "projects",
						type: "varchar",
					},
				],
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('students');
    }

}
