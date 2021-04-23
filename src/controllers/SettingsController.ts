import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repositories/SettingsRepository";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingsRepository = getCustomRepository(SettingRepository);

    const setting = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(setting);

    return response.json(setting);
  }
}

export { SettingsController };
