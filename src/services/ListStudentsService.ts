import {getRepository} from 'typeorm';

import Student from '../models/Student';

class ListStudentsService {
	public async execute(): Promise<Student[]> {
		const studentRepository = getRepository(Student);

		const student = await studentRepository.find();
		return student;
	}
}

export default ListStudentsService;
