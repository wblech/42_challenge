import { getRepository } from "typeorm";

import Student from "../models/Student";

interface RequestDTO {
	id: number;
}

class DeleteStudentService {
	public async execute({ id }: RequestDTO): Promise<void> {
		const studentRepository = getRepository(Student);

		const isStudent = await studentRepository.findOne({
			where: { id },
		});

		if (!isStudent) {
			throw new Error("Student not found");
		}

		await studentRepository.delete(id);
	}
}

export default DeleteStudentService;
