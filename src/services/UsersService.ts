import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserCreate {
  email: string;
}

class UsersService {

  private usersRepository:Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ email }: IUserCreate) {

    //verificar se o usuario existe
    const userExists = await this.usersRepository.findOne({
      email,
    });

    //senao existir criar
    if (!userExists) {
      const user = this.usersRepository.create({
        email,
      });

      await this.usersRepository.save(user);
      return user;
    }
    //se existir retornar
    else {
      return userExists;
    }
  }
}

export {UsersService};
