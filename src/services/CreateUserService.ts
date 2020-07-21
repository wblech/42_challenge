import {getRepository} from "typeorm"
import {hash} from "bcryptjs"

import User from '../models/User';


interface RequestDTO {
	name: string;
	email: string;
	password: string;
}

class CreateUserService {
	public async execute({name, email, password}: RequestDTO): Promise<User> {
		const userRepository = getRepository(User);

		const isEmailDuplicated = await userRepository.findOne({
			where: { email }
		});

		if (isEmailDuplicated) {
			throw new Error("E-mail already register");
		}

		const passwordHashed = await hash(password, 8);

		const user = userRepository.create({
			name,
			email,
			password: passwordHashed
		})

		await userRepository.save(user);
		return user;
	}
}

export default CreateUserService;
