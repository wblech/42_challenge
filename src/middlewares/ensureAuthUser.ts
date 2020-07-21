import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import authConfig from '../config/auth';

interface TokenDecoded {
	iat: number;
	exp: number;
	sub: string;
}

export function ensureAuthUser(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization;
	if (!authHeader) {
		throw new Error("Token not informed");
	}

	const [, token] = authHeader.split(" ");
	try {
		const decoded = verify(token, authConfig.jwt.secret);
		const { sub } = decoded as TokenDecoded;

		request.user = {
			id: sub,
		}

		return next();
	} catch {
		throw new Error("Token not valid");

	}


}
