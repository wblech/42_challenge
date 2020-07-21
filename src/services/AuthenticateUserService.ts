import { getRepository } from "typeorm";

import User from "../models/User";

import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface RequestDTO {
	email: string;
	password: string;
}

interface ResponseDTO {
	token: string;
	user: User;
}

class AuthenticateUserService {
	public async execute({
		email,
		password,
	}: RequestDTO): Promise<ResponseDTO> {
		const userRepository = getRepository(User);

		const user = await userRepository.findOne({
			where: { email },
		});

		if (!user) {
			throw new Error("Email/Password incorrect");
		}

		const isPasswordCorrect = await compare(password, user.password);
		if (!isPasswordCorrect) {
			throw new Error("Email/Password incorrect");
		}
		const { secret, expiresIn } = authConfig.jwt;
		const token = sign({}, secret, {
			subject: user.id,
			expiresIn: expiresIn,
		});

		return {
			token,
			user,
		};
	}
}

export default AuthenticateUserService;
