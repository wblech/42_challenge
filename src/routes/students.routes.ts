import { Router } from "express";

import CreateStudentService from "../services/CreateStudentService";
import DeleteStudentService from "../services/DeleteStudentService";
import ListStudentByProjectService from "../services/ListStudentByProjectService";
import ListStudentsService from "../services/ListStudentsService";
import { ensureAuthUser } from "../middlewares/ensureAuthUser";

const studentsRouter = Router();

studentsRouter.post("/", ensureAuthUser,async (request, response) => {
	try {
		const { name, intra_id, projects } = request.body;
		const createStudent = new CreateStudentService();
		const student = await createStudent.execute({
			name,
			intra_id,
			projects,
		});
		response.status(201).json(student);
	} catch (err) {
		response.status(400).json({ error: err.message });
	}
});

studentsRouter.delete("/:id", async (request, response) => {
	try {
		const { id } = request.params;

		const deleteStudent = new DeleteStudentService();
		await deleteStudent.execute({ id: parseInt(id) });
		return response.status(200).send();
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

studentsRouter.get("/", async (request, response) => {
	const { project } = request.query;

	if (project) {
		const retProject = project.toString();
		const listStudents = new ListStudentByProjectService();
		const student = await listStudents.execute({ project: retProject });
		return response.json(student);
	} else {
		const listStudents = new ListStudentsService();
		const students = await listStudents.execute();
		return response.json(students);
	}
});

export default studentsRouter;
