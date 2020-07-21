import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("students")
class Student {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	name: string;

	@Column()
	intra_id: string;

	@Column("simple-array")
	projects: string[];
}

export default Student;
