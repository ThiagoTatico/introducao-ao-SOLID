import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;

    try {
      this.listAllUsersUseCase.execute(user_id)
    } catch (error) {
      return response.status(400).json({ error: error.message }).send();
    }

    return response.status(201).send();
  }
}

export { ListAllUsersController };
