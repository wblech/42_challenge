import { Router } from "express";

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
	try {
		const { email, password } = request.body;

		const createSession = new AuthenticateUserService();
		const {token, user} = await createSession.execute({ email, password });

		return response.status(201).json({token});
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default sessionsRouter;
