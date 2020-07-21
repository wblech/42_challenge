import { getRepository } from "typeorm";

import Student from "../models/Student";

interface RequestDTO {
	name: string;
	intra_id: string;
	projects: string[];
}

class CreateStudentService {
	public async execute({
		name,
		intra_id,
		projects,
	}: RequestDTO): Promise<Student> {
		const studentRepository = getRepository(Student);

		const isIntraDuplicated = await studentRepository.findOne({
			where: { intra_id },
		});

		if (isIntraDuplicated) {
			throw new Error("Intra_id already register");
		}

		const student = studentRepository.create({ name, intra_id, projects });
		await studentRepository.save(student);

		const { id } = student;
		return {
			id,
			name,
			intra_id,
			projects
		};;
	}
}

export default CreateStudentService;
