import { getRepository } from "typeorm";

import Student from "../models/Student";

interface RequestDTO {
	project: string;
}

class ListStudentByProjectService {
	public async execute({ project }: RequestDTO): Promise<Student[]> {
		const studentRepository = getRepository(Student);

		const student = await studentRepository
			.createQueryBuilder("students")
			.where("students.projects like :project", {
				project: `%${project}%`,
			})
			.getMany();

		return student;

	}
}

export default ListStudentByProjectService;
